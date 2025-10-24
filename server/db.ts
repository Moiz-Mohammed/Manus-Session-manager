import { eq, and } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { InsertUser, users, trackProgress, languageProgress, InsertTrackProgress, InsertLanguageProgress } from "../drizzle/schema";
import { ENV } from './_core/env';

let _db: ReturnType<typeof drizzle> | null = null;

// Lazily create the drizzle instance so local tooling can run without a DB.
export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) {
    throw new Error("User openId is required for upsert");
  }

  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }

  try {
    const values: InsertUser = {
      openId: user.openId,
    };
    const updateSet: Record<string, unknown> = {};

    const textFields = ["name", "email", "loginMethod"] as const;
    type TextField = (typeof textFields)[number];

    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };

    textFields.forEach(assignNullable);

    if (user.lastSignedIn !== undefined) {
      values.lastSignedIn = user.lastSignedIn;
      updateSet.lastSignedIn = user.lastSignedIn;
    }
    if (user.role !== undefined) {
      values.role = user.role;
      updateSet.role = user.role;
    } else if (user.openId === ENV.ownerOpenId) {
      values.role = 'admin';
      updateSet.role = 'admin';
    }

    if (!values.lastSignedIn) {
      values.lastSignedIn = new Date();
    }

    if (Object.keys(updateSet).length === 0) {
      updateSet.lastSignedIn = new Date();
    }

    await db.insert(users).values(values).onDuplicateKeyUpdate({
      set: updateSet,
    });
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    throw error;
  }
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);

  return result.length > 0 ? result[0] : undefined;
}

// Progress tracking queries
export async function getTrackProgress(userId: number, trackName: string) {
  const db = await getDb();
  if (!db) return undefined;

  const result = await db
    .select()
    .from(trackProgress)
    .where(and(eq(trackProgress.userId, userId), eq(trackProgress.trackName, trackName)))
    .limit(1);

  return result.length > 0 ? result[0] : undefined;
}

export async function getAllTrackProgress(userId: number) {
  const db = await getDb();
  if (!db) return [];

  return await db
    .select()
    .from(trackProgress)
    .where(eq(trackProgress.userId, userId));
}

export async function updateTrackProgress(userId: number, trackName: string, data: Partial<InsertTrackProgress>) {
  const db = await getDb();
  if (!db) return undefined;

  const existing = await getTrackProgress(userId, trackName);

  if (!existing) {
    const newProgress: InsertTrackProgress = {
      userId,
      trackName,
      progress: data.progress ?? 0,
      completedTopics: data.completedTopics ?? 0,
      totalTopics: data.totalTopics ?? 0,
    };
    await db.insert(trackProgress).values(newProgress);
    return newProgress;
  }

  const updateData: Record<string, unknown> = {};
  if (data.progress !== undefined) updateData.progress = data.progress;
  if (data.completedTopics !== undefined) updateData.completedTopics = data.completedTopics;
  if (data.totalTopics !== undefined) updateData.totalTopics = data.totalTopics;
  updateData.updatedAt = new Date();

  await db
    .update(trackProgress)
    .set(updateData)
    .where(and(eq(trackProgress.userId, userId), eq(trackProgress.trackName, trackName)));

  return { ...existing, ...updateData };
}

// Language progress queries
export async function getLanguageProgress(userId: number, languageName: string) {
  const db = await getDb();
  if (!db) return undefined;

  const result = await db
    .select()
    .from(languageProgress)
    .where(and(eq(languageProgress.userId, userId), eq(languageProgress.languageName, languageName)))
    .limit(1);

  return result.length > 0 ? result[0] : undefined;
}

export async function getLanguageProgressByTrack(userId: number, trackName: string) {
  const db = await getDb();
  if (!db) return [];

  return await db
    .select()
    .from(languageProgress)
    .where(and(eq(languageProgress.userId, userId), eq(languageProgress.trackName, trackName)));
}

export async function updateLanguageProgress(userId: number, languageName: string, trackName: string, data: Partial<InsertLanguageProgress>) {
  const db = await getDb();
  if (!db) return undefined;

  const existing = await getLanguageProgress(userId, languageName);

  if (!existing) {
    const newProgress: InsertLanguageProgress = {
      userId,
      languageName,
      trackName,
      status: data.status ?? "not-started",
      progress: data.progress ?? 0,
      completedLessons: data.completedLessons ?? 0,
      totalLessons: data.totalLessons ?? 0,
    };
    await db.insert(languageProgress).values(newProgress);
    return newProgress;
  }

  const updateData: Record<string, unknown> = {};
  if (data.status !== undefined) updateData.status = data.status;
  if (data.progress !== undefined) updateData.progress = data.progress;
  if (data.completedLessons !== undefined) updateData.completedLessons = data.completedLessons;
  if (data.totalLessons !== undefined) updateData.totalLessons = data.totalLessons;
  updateData.updatedAt = new Date();

  await db
    .update(languageProgress)
    .set(updateData)
    .where(and(eq(languageProgress.userId, userId), eq(languageProgress.languageName, languageName)));

  return { ...existing, ...updateData };
}

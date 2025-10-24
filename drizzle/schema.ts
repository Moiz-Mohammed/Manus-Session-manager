import { int, mysqlEnum, mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

/**
 * Track progress for each learning track (Full-Stack, DevOps, AI/ML)
 */
export const trackProgress = mysqlTable("trackProgress", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(),
  trackName: varchar("trackName", { length: 64 }).notNull(),
  progress: int("progress").default(0).notNull(),
  completedTopics: int("completedTopics").default(0).notNull(),
  totalTopics: int("totalTopics").default(0).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type TrackProgress = typeof trackProgress.$inferSelect;
export type InsertTrackProgress = typeof trackProgress.$inferInsert;

/**
 * Language/Topic progress tracking
 */
export const languageProgress = mysqlTable("languageProgress", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(),
  languageName: varchar("languageName", { length: 128 }).notNull(),
  trackName: varchar("trackName", { length: 64 }).notNull(),
  status: mysqlEnum("status", ["not-started", "in-progress", "completed"]).default("not-started").notNull(),
  progress: int("progress").default(0).notNull(),
  completedLessons: int("completedLessons").default(0).notNull(),
  totalLessons: int("totalLessons").default(0).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type LanguageProgress = typeof languageProgress.$inferSelect;
export type InsertLanguageProgress = typeof languageProgress.$inferInsert;


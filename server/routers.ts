import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router, protectedProcedure } from "./_core/trpc";
import { z } from "zod";
import { getAllTrackProgress, updateTrackProgress, getLanguageProgressByTrack, updateLanguageProgress } from "./db";

export const appRouter = router({
  system: systemRouter,

  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  progress: router({
    tracks: protectedProcedure.query(async ({ ctx }) => {
      return await getAllTrackProgress(ctx.user.id);
    }),

    languages: protectedProcedure
      .input(z.object({ trackName: z.string() }))
      .query(async ({ ctx, input }) => {
        return await getLanguageProgressByTrack(ctx.user.id, input.trackName);
      }),

    updateTrack: protectedProcedure
      .input(
        z.object({
          trackName: z.string(),
          progress: z.number().min(0).max(100).optional(),
          completedTopics: z.number().optional(),
          totalTopics: z.number().optional(),
        })
      )
      .mutation(async ({ ctx, input }) => {
        return await updateTrackProgress(ctx.user.id, input.trackName, {
          progress: input.progress,
          completedTopics: input.completedTopics,
          totalTopics: input.totalTopics,
        });
      }),

    updateLanguage: protectedProcedure
      .input(
        z.object({
          languageName: z.string(),
          trackName: z.string(),
          status: z.enum(["not-started", "in-progress", "completed"]).optional(),
          progress: z.number().min(0).max(100).optional(),
          completedLessons: z.number().optional(),
          totalLessons: z.number().optional(),
        })
      )
      .mutation(async ({ ctx, input }) => {
        return await updateLanguageProgress(
          ctx.user.id,
          input.languageName,
          input.trackName,
          {
            status: input.status,
            progress: input.progress,
            completedLessons: input.completedLessons,
            totalLessons: input.totalLessons,
          }
        );
      }),
  }),
});

export type AppRouter = typeof appRouter;


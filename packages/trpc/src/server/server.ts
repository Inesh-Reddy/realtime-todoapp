import { initTRPC } from "@trpc/server";
import { z } from "zod";

const t = initTRPC.create();
const publicProcedure = t.procedure;

const appRouter = t.router({
  todo: t.router({
    getTodos: publicProcedure.output(z.array(z.object({
      id: z.string(),
      title: z.string(),
      description: z.string(),
      priority: z.string(),
      status: z.enum([
        StatusEnum.Completed,
        StatusEnum.In_Progress,
        StatusEnum.Not_Started,
      ] as const),
    }))).query(async () => "PLACEHOLDER_DO_NOT_REMOVE" as any),
    createTodo: publicProcedure.input(z.object({
      title: z.string(),
      priority: z.string().optional(),
    })).output(z.object({
      id: z.string(),
      title: z.string(),
      description: z.string(),
      priority: z.string(),
      status: z.enum([
        StatusEnum.Completed,
        StatusEnum.In_Progress,
        StatusEnum.Not_Started,
      ] as const),
    })).mutation(async () => "PLACEHOLDER_DO_NOT_REMOVE" as any)
  })
});
export type AppRouter = typeof appRouter;


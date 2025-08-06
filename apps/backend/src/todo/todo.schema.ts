import { StatusEnum } from '@repo/shared';
import { z } from 'zod';

export const StatusZ = z.enum([
  StatusEnum.Completed,
  StatusEnum.In_Progress,
  StatusEnum.Not_Started,
] as const);
export const zTodo = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  priority: z.string(),
  status: StatusZ,
});

export const zCreateTodo = z.object({
  title: z.string(),
  priority: z.string().optional(),
});

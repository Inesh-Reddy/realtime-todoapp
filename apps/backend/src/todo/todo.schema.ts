import { StatusValues } from '@repo/shared';
import { z } from 'zod';

export const StatusZ = z.enum(StatusValues as [string, ...string[]]);
export const zTodo = z.object({
  id: z.string().optional(),
  title: z.string(),
  description: z.string(),
  priority: z.string(),
  status: StatusZ,
});

export const zCreateTodo = z.object({
  title: z.string(),
  priority: z.string().optional(),
});

import { Inject } from '@nestjs/common';
import { Input, Mutation, Query, Router } from 'nestjs-trpc';
import { TodoService } from './todo.service';
import { TodoTypesModule } from '@repo/shared';
import { z } from 'zod';
import { zCreateTodo, zTodo } from './todo.schema';

@Router({ alias: 'todo' })
export class TodoRouter {
  constructor(@Inject(TodoService) private todoService: TodoService) {}

  @Query({
    output: z.array(zTodo),
  })
  getTodos(): Promise<TodoTypesModule.TodoType[]> {
    return this.todoService.getAllTodos();
  }

  @Mutation({
    input: zCreateTodo,
    output: zTodo,
  })
  createTodo(
    @Input() input: TodoTypesModule.CreateTodo,
  ): Promise<TodoTypesModule.TodoType> {
    return this.todoService.createTodo(input);
  }
}

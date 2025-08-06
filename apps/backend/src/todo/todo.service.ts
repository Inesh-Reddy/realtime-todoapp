import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Todo } from 'src/db/db.schema';
import { TodoTypesModule } from '@repo/shared';

@Injectable()
export class TodoService {
  constructor(@InjectModel('Todo') private todoModel: Model<Todo>) {}

  async getAllTodos(): Promise<TodoTypesModule.TodoType[]> {
    const data = await this.todoModel.find();
    const result = data.map((todo) => ({
      id: todo._id as string,
      description: todo.description,
      title: todo.title,
      priority: todo.priority,
      status: todo.status,
    }));
    return result;
  }

  async createTodo(
    input: TodoTypesModule.CreateTodo,
  ): Promise<TodoTypesModule.TodoType> {
    const data = await this.todoModel.create(input);
    const result = {
      id: data._id as string,
      title: data.title,
      description: data.description,
      priority: data.priority,
      status: data.status,
    };
    return result;
  }
}

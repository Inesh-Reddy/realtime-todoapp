import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Todo } from 'src/db/db.schema';
import { TodoTypesModule } from '@repo/shared';

@Injectable()
export class TodoService {
  constructor(@InjectModel('Todo') private todoModel: Model<Todo>) {}

  async getAllTodos(): Promise<TodoTypesModule.TodoType[]> {
    const data = await this.todoModel.find().lean();
    const result = data.map((todo) => ({
      id: `${todo._id}`,
      description: todo.description,
      title: todo.title,
      priority: todo.priority,
      status: todo.status,
    }));
    console.log(result);
    return result;
  }

  async createTodo(
    input: TodoTypesModule.CreateTodo,
  ): Promise<TodoTypesModule.TodoType> {
    console.log('Inside Service ');
    try {
      const todoToCreate = {
        title: input.title,
        description: 'test',
        priority: input.priority || 'medium',
        status: 'Not_Started',
      };
      const data = await this.todoModel.create(todoToCreate);
      console.log(data);
      const result = {
        id: data._id as string,
        title: data.title,
        description: data.description,
        priority: data.priority,
        status: data.status,
      };
      console.log(result);
      return result;
    } catch (e) {
      console.log(e);
      throw new Error(e);
    }
  }
}

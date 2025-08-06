import { StatusEnum } from "../enums/status.enums";

type TodoDTO = {
  id: string;
  title: string;
  description: string;
  priority: string;
  status: StatusEnum;
};

type CreateTodoDTO = {
  title: string;
  priority?: string;
};

export namespace TodoTypesModule {
  export type TodoType = TodoDTO;
  export type CreateTodo = CreateTodoDTO;
}

export default TodoTypesModule;

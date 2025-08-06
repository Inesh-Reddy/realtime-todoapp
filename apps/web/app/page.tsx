"use client";
import { trpc } from "../utils/trpc";

export default function Home() {
  const todos = trpc.todo.getTodos.useQuery();
  console.log(todos.data);

  return (
    <div>
      {todos.data?.map((todo) => (
        <div key={todo.id}>
          <p>Title: {todo.title}</p>
          <p>Description: {todo.description}</p>
          <p>Priority: {todo.priority}</p>
          <p>Status: {todo.status}</p>
        </div>
      ))}
    </div>
  );
}

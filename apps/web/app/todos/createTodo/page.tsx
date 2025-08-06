"use client";
import React, { useRef } from "react";
import { trpc } from "../../../utils/trpc";

const CreateTodo = () => {
  const titleRef = useRef<HTMLInputElement>(null);
  const create = trpc.todo.createTodo.useMutation();
  const OnClickHandler = () => {
    const title = titleRef.current?.value || "Test";
    create.mutateAsync({ title });
    console.log(create);
  };
  return (
    <div>
      <input ref={titleRef} placeholder="Title: "></input>
      <br></br>
      <button onClick={OnClickHandler}>Create Todo</button>
      <div>
        Title: {create.data?.title} <br></br>
        Description: {create.data?.description}
        <br></br>
        Priority: {create.data?.priority}
        <br></br>
        Status: {create.data?.status}
        <br></br>
      </div>
    </div>
  );
};

export default CreateTodo;

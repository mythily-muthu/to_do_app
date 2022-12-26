import React from "react";
import { useTodoContext } from "../Provider/ToDoProvider";

const ToDoList = () => {
  let { todoList } = useTodoContext();

  return (
    <ul>
      {todoList.map((todo, index) => (
        <li key={index}>todo</li>
      ))}
    </ul>
  );
};

export default ToDoList;

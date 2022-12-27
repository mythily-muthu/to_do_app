import React from "react";
import { useTodoContext } from "../Provider/ToDoProvider";

const ToDoList = () => {
  let { todoList, removeTodo } = useTodoContext();

  return (
    <div className="list">
      {todoList.map((todo, index) => (
        <li key={index}>
          {todo}

          <button onClick={() => removeTodo(index)} className="delete">
            x
          </button>
        </li>
      ))}
    </div>
  );
};

export default ToDoList;

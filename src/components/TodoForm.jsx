import React, { useState } from "react";
import { useTodoContext } from "../Provider/ToDoProvider";

const TodoForm = () => {
  let { getNumberofTodoItems, addTodo } = useTodoContext();
  let [todoItem, setTodoItem] = useState("");

  let handleSubmit = (e) => {
    e.preventDefault();

    if (!todoItem) {
      return;
    }

    addTodo(todoItem);
    setTodoItem("");

    console.log("new todo =>", todoItem);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h4>Number of todo items: {getNumberofTodoItems()}</h4>
      <input
        className="input"
        type="text"
        value={todoItem}
        placeholder="Type a task now!"
        onChange={(e) => setTodoItem(e.target.value)}
      />

      <button className="submit" type="submit">
        ADD
      </button>
    </form>
  );
};

export default TodoForm;

import { createContext, useContext, useState } from "react";

export let ToDoContext = createContext();

let initialTodoListState = ["read the book"];

const ToDoProvider = ({ children }) => {
  let [todoList, setTodoList] = useState(initialTodoListState);

  let contextValue = {
    todoList,
  };

  return (
    <ToDoContext.Provider value={contextValue}>{children}</ToDoContext.Provider>
  );
};

export let useTodoContext = () => useContext(ToDoContext);

export default ToDoProvider;

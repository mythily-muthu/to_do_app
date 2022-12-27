import { createContext, useContext, useState } from "react";

export let ToDoContext = createContext();

let initialTodoListState = ["read the book"];

const ToDoProvider = ({ children }) => {
  let [todoList, setTodoList] = useState(initialTodoListState);

  let getNumberOfTodoItems = () => todoList.length;

  let addTodo = (newTodoItem) => {
    setTodoList([...todoList, newTodoItem]);
  };

  let removeTodo = (todoIndex) => {
    let newList = todoList.filter((_, index) => index !== todoIndex);
    setTodoList(newList);
  };

  let contextValue = {
    todoList,
    getNumberOfTodoItems,
    addTodo,
    removeTodo,
  };

  return (
    <ToDoContext.Provider value={contextValue}>{children}</ToDoContext.Provider>
  );
};

export let useTodoContext = () => useContext(ToDoContext);

export default ToDoProvider;

import "./App.css";
import TodoForm from "./components/TodoForm";
import ToDoList from "./components/ToDoList";
import ToDoProvider from "./Provider/ToDoProvider";

function App() {
  return (
    <div className="App">
      <div className="form">
        <header>
          <h1 className="title">TO-DO LIST</h1>
        </header>
        <div className="content">
          {" "}
          <ToDoProvider>
            <TodoForm />
            <ToDoList />
          </ToDoProvider>
        </div>
      </div>
    </div>
  );
}

export default App;

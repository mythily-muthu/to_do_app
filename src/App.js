
import './App.css';
import ToDoList from './components/ToDoList';
import ToDoProvider from './Provider/ToDoProvider';

function App() {
  return (
    <div className="App">
      <header>
        <h1>TODO LIST</h1>
      </header>

      <ToDoProvider>
        <ToDoList />
      </ToDoProvider>




    </div>
  );
}

export default App;

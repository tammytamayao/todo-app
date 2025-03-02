import logo from "./logo.svg";
import "./App.css";
import TodoForm from "./components/TodoForm.tsx";
import TodoList from "./components/TodoList.tsx";
import { useState } from "react";

function App() {
  const [toDoList, setToDoList] = useState([]);
  const AddToDo = (toDoInput) => {
    const toDoDate = new Date().toISOString().split("T")[0];
    const toDo = {
      title: toDoInput,
      date: toDoDate,
      completed: false,
    };
    toDoList.push(toDo);
    console.log(toDoList);
  };

  return (
    <div className="App">
      <TodoForm onAdd={AddToDo} />
      <TodoList />
    </div>
  );
}

export default App;

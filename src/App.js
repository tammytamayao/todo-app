import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoForm from "./components/TodoForm.tsx";
import TodoList from "./components/TodoList.tsx";

function App() {
  const [toDoList, setToDoList] = useState([]);

  const AddToDo = (toDoInput) => {
    const toDoDate = new Date().toISOString().split("T")[0];
    const toDo = {
      id: Date.now(),
      title: toDoInput,
      date: toDoDate,
      completed: false,
    };
    setToDoList((prevToDoList) => [...prevToDoList, toDo]);
  };

  const DeleteToDo = (toDo) => {
    setToDoList(toDoList.filter((todo) => todo.id !== toDo.id));
  };

  const ToggleToDo = (toDo) => {
    setToDoList(
      toDoList.map((todo) =>
        todo.id === toDo.id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="App container py-5">
      <h1 className="text-center mb-4">Todo List</h1>
      <TodoForm onAdd={AddToDo} />
      <TodoList toDos={toDoList} onDelete={DeleteToDo} onToggle={ToggleToDo} />
    </div>
  );
}

export default App;

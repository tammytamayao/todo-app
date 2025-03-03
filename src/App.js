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
      isEdit: false,
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

  const sortedToDo = [
    ...toDoList
      .filter((todo) => !todo.completed)
      .sort((a, b) => a.date - b.date),
    ...toDoList
      .filter((todo) => todo.completed)
      .sort((a, b) => a.date - b.date),
  ];

  const EditToDo = (toDo) => {
    setToDoList(
      toDoList.map((todo) =>
        todo.id === toDo.id ? { ...todo, isEdit: !todo.isEdit } : todo
      )
    );
  };

  const UpdateToDo = (toDo) => {
    setToDoList(
      toDoList.map((todo) =>
        todo.id === toDo.id
          ? { ...todo, title: toDo.title, isEdit: false }
          : todo
      )
    );
  };

  return (
    <div className="App container py-5">
      <h1 className="text-center mb-4">Todo List</h1>
      <TodoForm onAdd={AddToDo} />
      <TodoList
        toDos={sortedToDo}
        onDelete={DeleteToDo}
        onToggle={ToggleToDo}
        onEdit={EditToDo}
        onUpdate={UpdateToDo}
      />
    </div>
  );
}

export default App;

import React from "react";
import Todo from "./Todo.tsx";

function TodoList({ toDos }) {
  return (
    <div>
      <span>This is TodoList!</span>
      <ul>
        {toDos.map((toDo: any, index: number) => (
          <li key={index}>
            {toDo.title} - {toDo.date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

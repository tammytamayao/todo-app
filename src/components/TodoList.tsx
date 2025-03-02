import React from "react";
import Todo from "./Todo.tsx";

function TodoList({ toDos }) {
  return (
    <div>
      <ul>
        {toDos.map((toDo: any, index: number) => (
          <Todo index={index} toDo={toDo} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

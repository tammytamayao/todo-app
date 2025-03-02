import React from "react";
import Todo from "./Todo.tsx";

function TodoList({ toDos, onDelete, onToggle }) {
  return (
    <div>
      <ul>
        {toDos.map((toDo: any, index: number) => (
          <Todo
            index={index}
            toDo={toDo}
            onDelete={onDelete}
            onToggle={onToggle}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

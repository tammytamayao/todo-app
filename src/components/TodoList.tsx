import React from "react";
import Todo from "./Todo.tsx";

function TodoList({ toDos, onDelete, onToggle }) {
  return (
    <div>
      <ul className="list-group">
        {toDos.map((toDo: any) => (
          <Todo
            key={toDo.id}
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

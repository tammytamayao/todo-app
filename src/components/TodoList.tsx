import React from "react";
import Todo from "./Todo.tsx";

function TodoList({ toDos, onDelete, onToggle, onEdit, onUpdate }) {
  return (
    <div>
      <ul className="list-group">
        {toDos.map((toDo: any) => (
          <Todo
            key={toDo.id}
            toDo={toDo}
            onDelete={onDelete}
            onToggle={onToggle}
            onEdit={onEdit}
            onUpdate={onUpdate}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

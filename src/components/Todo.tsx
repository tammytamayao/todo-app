import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Todo({ toDo, index, onDelete, onToggle }) {
  return (
    <div>
      <li key={index}>
        <input
          type="checkbox"
          checked={toDo.completed}
          onChange={() => onToggle(toDo)}
        />
        <span
          className={`${
            toDo.completed ? "text-decoration-line-through text-muted" : ""
          }`}
        >
          {toDo.title} ({toDo.date})
        </span>

        <button onClick={() => onDelete(toDo)}>Delete</button>
      </li>
    </div>
  );
}

export default Todo;

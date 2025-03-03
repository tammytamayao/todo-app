import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Todo({ toDo, onDelete, onToggle }) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div className="d-flex align-items-center">
        <input
          type="checkbox"
          checked={toDo.completed}
          onChange={() => onToggle(toDo)}
          className="me-2"
        />
        <span
          className={`${
            toDo.completed ? "text-decoration-line-through text-muted" : ""
          }`}
        >
          {toDo.title} <small className="text-muted">({toDo.date})</small>
        </span>
      </div>
      <button
        onClick={() => onDelete(toDo)}
        className="btn btn-danger btn-sm ms-2"
      >
        X
      </button>
    </li>
  );
}

export default Todo;

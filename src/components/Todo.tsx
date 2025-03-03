import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Todo({ toDo, onDelete, onToggle, onEdit, onUpdate }) {
  const [newInput, setNewInput] = useState(toDo.title);

  const handleEdit = (event) => {
    setNewInput(event.target.value);
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center border border-white">
      <div className="d-flex align-items-center">
        <input
          type="checkbox"
          checked={toDo.completed}
          onChange={() => onToggle(toDo)}
          className="me-2"
        />
        {toDo.isEdit ? (
          <input
            type="text"
            value={newInput}
            className="form-control form-control-sm"
            onChange={handleEdit}
          />
        ) : (
          <span
            className={`${
              toDo.completed ? "text-decoration-line-through text-muted" : ""
            }`}
          >
            {toDo.title} <small className="text-muted">({toDo.date})</small>
          </span>
        )}
      </div>
      <div>
        <button
          onClick={() =>
            toDo.isEdit
              ? onUpdate({ ...toDo, title: newInput, isEdit: false })
              : onEdit(toDo)
          }
          className="btn btn-secondary btn-sm ms-2"
        >
          {toDo.isEdit ? "Update" : "Edit"}
        </button>
        <button
          onClick={() => onDelete(toDo)}
          className="btn btn-danger btn-sm ms-2"
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default Todo;

import React from "react";

function Todo({ toDo, index }) {
  return (
    <div>
      <li key={index}>
        <input type="checkbox" checked={toDo.completed} />
        <span>{toDo.title}</span>
        <span>({toDo.date})</span>
        <button>Delete</button>
      </li>
    </div>
  );
}

export default Todo;

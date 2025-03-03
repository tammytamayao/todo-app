import React, { useState } from "react";

function TodoForm({ onAdd }) {
  const [toDoInput, setToDoInput] = useState("");

  const handleChange = (event) => {
    setToDoInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (toDoInput.trim()) {
      onAdd(toDoInput);
      setToDoInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex mb-4">
      <input
        type="text"
        value={toDoInput}
        onChange={handleChange}
        className="form-control me-2"
        placeholder="Enter a new todo"
      />
      <button type="submit" className="btn btn-primary">
        Add
      </button>
    </form>
  );
}

export default TodoForm;

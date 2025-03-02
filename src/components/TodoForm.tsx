import React, { useState } from "react";

function TodoForm({ onAdd }) {
  const [toDoInput, setToDoInput] = useState("");

  const handleChange = (event: any) => {
    setToDoInput(event.target.value);
  };
  const handleSubmit = (event: any) => {
    event.preventDefault();
    onAdd(toDoInput);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={toDoInput} onChange={handleChange} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default TodoForm;

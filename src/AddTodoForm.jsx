import React, { useState } from 'react';

function AddTodoForm({ onAddTodo }) {
  const [todoTitle, setTodoTitle] = useState('');

  const handleTitleChange = (event) => {
    setTodoTitle(event.target.value);
  };

  const handleAddTodo = (event) => {
    event.preventDefault();
    const newTodo = {
      title: todoTitle,
      id: Date.now(), // UniqueID for the todo item
    };
    onAddTodo(newTodo); // Pass the new todo the parent
    setTodoTitle(''); // Reset the input field
  };

  return (
    <form onSubmit={handleAddTodo}>
      <input
        type="text"
        value={todoTitle}
        onChange={handleTitleChange}
        placeholder="Enter todo"
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default AddTodoForm;
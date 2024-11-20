import React from 'react';

function AddTodoForm({ onAddTodo }) {
  const handleAddTodo = (event) => {
    event.preventDefault();
    const todoTitle = event.target.elements.title.value;
    onAddTodo(todoTitle);
    event.target.reset();
  };

  return (
    <form onSubmit={handleAddTodo}>
      <input type="text" name="title" placeholder="Add a new todo" />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default AddTodoForm;

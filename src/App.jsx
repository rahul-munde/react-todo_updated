import React, { useState } from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';

function App() {
  const [newTodo, setNewTodo] = useState('');
  const todos = [
    { id: 1, title: 'Learn React' },
    { id: 2, title: 'Build Todo App' },
  ];

  return (
    <div>
      <h1>Todo App</h1>
      <AddTodoForm onAddTodo={setNewTodo} />
      <p>New Todo: {newTodo}</p>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
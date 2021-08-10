import React, { useState } from 'react';

import Todo from './Todo';
import TodoForm from './TodoForm';

const TodoList = (props) => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    // to prevent add empty string
    if (!todo.text) return;

    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

  return (
    <React.Fragment>
      <h1>What's the Plan for Today?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo todos={todos} />
    </React.Fragment>
  );
};

export default TodoList;

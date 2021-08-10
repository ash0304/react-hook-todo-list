import React from 'react';
import TodoForm from './TodoForm';

const TodoList = (props) => {
  const addTodo = (todo) => {
    console.log(todo);
  };

  return (
    <React.Fragment>
      <h1>What's the Plan for Today?</h1>
      <TodoForm onSubmit={addTodo} />
    </React.Fragment>
  );
};

export default TodoList;

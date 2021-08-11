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

  const onCompleteHandler = (id) => {
    let updatedArr = todos.map((todo) => {
      // chnage the status of todo item
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });

    setTodos(updatedArr);
  };

  const onDeleteHandler = (id) => {
    const removedArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removedArr);
  };

  const onEditHandler = (newTodo) => {
    if (!newTodo.text) {
      return;
    }

    // update the todo list
    setTodos((prev) => {
      const updateTodos = prev.map((todo) => {
        return todo.id === newTodo.id ? newTodo : todo;
      });
      return updateTodos;
    });
  };

  return (
    <React.Fragment>
      <h1>What's the Plan for Today?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        onComplete={onCompleteHandler}
        onDelete={onDeleteHandler}
        onEdit={onEditHandler}
      />
    </React.Fragment>
  );
};

export default TodoList;

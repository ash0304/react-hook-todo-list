import React from 'react';

const Todo = (props) => {
  const content = props.todos.map((todo, index) => {
    return (
      <div key={todo.id} className="todo-row">
        <div style={{color: 'white'}}>{todo.text}</div>
      </div>
    );
  });

  return <React.Fragment>{content}</React.Fragment>;
};

export default Todo;

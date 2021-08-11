import React from 'react';

import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

const Todo = (props) => {
  const deleteHandler = (id) => {
    props.onDelete(id);
  };

  return (
    <React.Fragment>
      {props.todos.map((todo, index) => {
        return (
          <div key={index} className="todo-row">
            <div key={todo.id}>{todo.text}</div>
            <div className="icons">
              <RiCloseCircleLine
                className="delete-icon"
                onClick={deleteHandler.bind(null, todo.id)}
              />
              <TiEdit className="edit-icon" />
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default Todo;

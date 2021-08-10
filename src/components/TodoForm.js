import { useState } from 'react';

const TodoForm = (props) => {
  const [input, setInput] = useState('');

  const changeHandler = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
  };

  return (
    <form className="todo-form" onSubmit={submitHandler}>
      <input type="text" name="text" className="todo-input" value={input} onChange={changeHandler} />
      <button className="todo-button">Add todo</button>
    </form>
  );
};

export default TodoForm;

import { useState } from 'react';

const TodoForm = (props) => {
  const [input, setInput] = useState('');

  const changeHandler = (e) => {
    setInput(e.target.value);
  };

  return (
    <form>
      <input type="text" name="text" value={input} onChange={changeHandler} />
      <button>Add todo</button>
    </form>
  );
};

export default TodoForm;

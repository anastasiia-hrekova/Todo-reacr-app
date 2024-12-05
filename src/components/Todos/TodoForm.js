import { useState } from 'react';
import Button from '../UI/Button';
import styles from './TodoForm.module.css';

function TodoForm({ addTodo }) {
  const [text, setText] = useState('');

  const onSubmitHandler = event => {
    event.preventDefault();
    addTodo(text);
    setText('');
  };

  return (
    <>
      <form className={styles.form} onSubmit={onSubmitHandler}>
        <input
          className={styles.input}
          value={text}
          onChange={e => setText(e.target.value)}
          type="text"
          placeholder="Enter new todo"
        />
        <Button title="Submit" type="submit">
          Submit
        </Button>
      </form>
    </>
  );
}

export default TodoForm;

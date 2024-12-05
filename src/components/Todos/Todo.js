import { RiArticleFill, RiDeleteBin2Line } from 'react-icons/ri';
import { FaCheck } from 'react-icons/fa';
import styles from './Todo.module.css';

function Todo({ todo, deleteTodo, toggleTodo }) {
  return (
    <div
      className={`${styles.todo} ${
        todo.isCompleted ? styles.completedTodo : ''
      } `}
    >
      <div className={styles.todoText}>
        <RiArticleFill className={styles.todoIcon} />
        {todo.text}
      </div>
      <div className={styles.todoIcons}>
        <RiDeleteBin2Line
          className={styles.deleteIcon}
          onClick={() => deleteTodo(todo.id)}
        />
        <FaCheck
          className={styles.checkIcon}
          onClick={() => toggleTodo(todo.id)}
        />
      </div>
    </div>
  );
}

export default Todo;

import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri';
import Button from '../UI/Button';

function TodosActions({ resetTodos, deleteCompleted, completedTodosExist }) {
  return (
    <>
      <Button title="Reset Todos" onClick={resetTodos}>
        <RiRefreshLine />
      </Button>
      <Button
        title="Comleted Todos"
        onClick={deleteCompleted}
        disabled={!completedTodosExist}
      >
        <RiDeleteBin2Line />
      </Button>
    </>
  );
}

export default TodosActions;

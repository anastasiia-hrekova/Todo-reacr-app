import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';
import TodosActions from './components/Todos/TodosActions';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = text => {
    const newTodo = {
      text: text,
      isCompleted: false,
      id: uuidv4(),
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodoHandler = id => {
    setTodos(
      todos.map(todo =>
        todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo },
      ),
    );
  };

  const deleteTodoHandler = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const resetTodosHandler = () => {
    setTodos([]);
  };

  const deleteCompletedTodos = () => {
    setTodos(todos.filter(todo => !todo.isCompleted));
  };

  const completedTodosCount = todos.filter(todo => todo.isCompleted).length;

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />

      {!!todos.length && (
        <TodosActions
          todos={todos}
          resetTodos={resetTodosHandler}
          deleteCompleted={deleteCompletedTodos}
          completedTodosExist={!!completedTodosCount}
        />
      )}

      <TodoList
        todos={todos}
        deleteTodo={deleteTodoHandler}
        toggleTodo={toggleTodoHandler}
      />
      {todos.length ? (
        <h3>
          You have {completedTodosCount} completed $
          {completedTodosCount > 1 ? 'todos' : 'todo'}.
        </h3>
      ) : (
        ''
      )}
    </div>
  );
}

export default App;

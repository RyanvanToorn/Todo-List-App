import { IconButton } from '@components/IconButton/IconButton';
import { TodoCard } from '@components/TodoCard/TodoCard';
import type { ITodo } from '@interfaces/ITodo';
import { useState } from 'react';
import { SAMPLE_TODOS } from './temp/SampleTodos';

function App() {

  const [todos, setTodos] = useState<ITodo[]>(SAMPLE_TODOS);

  function handleAddTodo(newTodo: ITodo) {
    setTodos(prevTodos => [...prevTodos, newTodo]);
  };

  function handleRemoveTodo(todoId: number) {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== todoId));
  };

  function handleCompleteTodo(todoId: number) {
    setTodos(prevTodos => prevTodos.map(todo => {
      if (todo.id === todoId) {
        return { ...todo, completed: true, completedOn: new Date(), updatedOn: new Date() };
      }
      return todo;
    }));
  }


  return (
    <>
      <h1>Todo List App</h1>

      <div>
        <IconButton icon="Add" onClick={() => console.log("Add button clicked")} />
      </div>

      <div>
        {todos.map(todo => (
          <div key={todo.id}>
            <TodoCard {...todo} onRemove={() => handleRemoveTodo(todo.id)} onComplete={() => handleCompleteTodo(todo.id)} />
          </div>
        ))}
      </div>
    </>
  )
}

export default App

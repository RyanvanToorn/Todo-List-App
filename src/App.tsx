import { IconButton } from '@components/IconButton/IconButton';
import { TodoCard } from '@components/TodoCard/TodoCard';
import type { ITodo } from '@interfaces/ITodo';
import { useState } from 'react';
import { SAMPLE_TODOS } from './temp/SampleTodos';

function App() {

  const [todos, setTodos] = useState<ITodo[]>(SAMPLE_TODOS);


  return (
    <>
      <h1>Todo List App</h1>

      <div>
        <IconButton icon="Add" onClick={() => console.log("Add button clicked")} />
      </div>

      <div>
        {todos.map(todo => (
          <div key={todo.id}>
            <TodoCard {...todo} />
          </div>
        ))}
      </div>
    </>
  )
}

export default App

import { memo } from 'react';
import { memo as spredMemo } from 'spred';
import { useSignal } from 'spred-react';
import {
  setNewTodoDescription,
  addTodo,
  $trimmedNewTodoDescription,
} from '../../model/add';
import { createTodo } from '../../model/todo';

export const Header = memo(() => {
  console.log('render Header');

  const newTodoDescription = useSignal($trimmedNewTodoDescription);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter' || !newTodoDescription) return;

    e.preventDefault();
    addTodo(createTodo(newTodoDescription));
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <input
        value={newTodoDescription}
        onKeyDown={handleKeyDown}
        onChange={(e) => setNewTodoDescription(e.target.value)}
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
      ></input>
    </header>
  );
});

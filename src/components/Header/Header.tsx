import { memo, useState } from 'react';
import { addTodo } from '../../model/add';

export const Header = memo(() => {
  console.log('render Header');

  const [newTodoDescription, setNewTodoDescription] = useState('');

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter' || !newTodoDescription) return;

    e.preventDefault();
    addTodo(newTodoDescription);
    setNewTodoDescription('');
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

import { memo } from 'react';
import { computed } from 'spred';
import { useAtom } from 'spred-react';
import { $newTodoDescription, addTodo } from '../../model/add';
import { createTodo } from '../../model/todo';

export const Header = memo(() => {
  console.log('render Header');

  const newTodoDescription = useAtom(() =>
    computed(() => $newTodoDescription().trim())
  );

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
        onChange={(e) => $newTodoDescription(e.target.value)}
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
      ></input>
    </header>
  );
});

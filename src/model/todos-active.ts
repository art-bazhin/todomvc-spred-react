import { memo } from 'spred';
import { allTodos } from './todos-all';

export const activeTodos = memo(() =>
  allTodos().filter((todo) => !todo.completed)
);

export const activeTodosCount = memo(() => activeTodos().length);

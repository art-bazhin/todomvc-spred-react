import { memo } from 'spred';
import { $allTodos } from './todos-all';

export const $activeTodos = memo(() =>
  $allTodos().filter((todo) => !todo.completed)
);

export const $activeTodoIds = memo(() => $activeTodos().map((todo) => todo.id));

export const $activeTodosCount = memo(() => $activeTodos().length);

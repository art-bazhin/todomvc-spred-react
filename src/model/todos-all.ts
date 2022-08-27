import { memo } from 'spred';
import { state } from './store';

export const todoIds = state.select('todoIds');
export const todos = state.select('todos');

export const allTodos = memo(() => todoIds().map((id) => todos.select(id)));

export const allTodosCount = memo(() => todoIds().length);

export const maxId = memo(() => {
  const ids = todoIds().map((value) => +value);
  ids.push(0);

  return Math.max(...ids);
});

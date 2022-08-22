import { memo } from 'spred';
import { select } from './store';

export const todoIdsStore = select('todoIds');
export const todosStore = select('todos');

export const allTodoIds = todoIdsStore.state;

export const allTodos = memo(() =>
  allTodoIds().map((id) => todosStore.select(id).state)
);

export const allTodosCount = memo(() => todoIdsStore.state().length);

export const maxId = memo(() => {
  const ids = allTodoIds().map((value) => +value);
  ids.push(0);

  return Math.max(...ids);
});

import { on, signal } from 'spred';
import { TodoId } from './todo';
import { todoIds, todos } from './todos-all';

export const [removeTodosSignal, removeTodos] = signal<TodoId[]>();

on(removeTodosSignal, (ids) => {
  todoIds.update(todoIds().filter((id) => ids.indexOf(id) < 0));

  todos.update((state) => {
    ids.forEach((id) => delete state[id]);
  });
});

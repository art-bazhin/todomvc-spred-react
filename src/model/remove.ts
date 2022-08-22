import { on, signal } from 'spred';
import { TodoId } from './todo';
import { todoIdsStore, todosStore } from './todos-all';

export const [removeTodosSignal, removeTodos] = signal<TodoId[]>();

on(removeTodosSignal, (ids) => {
  todoIdsStore.update((state) => {
    return state.filter((id) => ids.indexOf(id) < 0);
  });

  todosStore.update((state) => {
    ids.forEach((id) => delete state[id]);
  });
});

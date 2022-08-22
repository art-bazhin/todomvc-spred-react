import { on, signal } from 'spred';
import { TodoId } from './todo';
import { allTodoIds, todosStore } from './todos-all';
import { allTodosAreCompleted } from './todos-completed';

export const [toggleTodoSignal, toggleTodo] = signal<TodoId>();
export const [toggleAllSignal, toggleAll] = signal();

on(toggleTodoSignal, (id) => {
  todosStore.select(id).update((state) => {
    if (!state) return;
    state.completed = !state.completed;
  });
});

on(toggleAllSignal, () => {
  const completed = !allTodosAreCompleted();

  allTodoIds().forEach((id) => {
    todosStore.select(id).update((state) => {
      if (!state) return;
      state.completed = completed;
    });
  });
});

import { on, signal } from 'spred';
import { TodoId } from './todo';
import { todoIds, todos } from './todos-all';
import { allTodosAreCompleted } from './todos-completed';

export const [toggleTodoSignal, toggleTodo] = signal<TodoId>();
export const [toggleAllSignal, toggleAll] = signal();

on(toggleTodoSignal, (id) => {
  todos.select(id).produce((state) => {
    if (!state) return;
    state.completed = !state.completed;
  });
});

on(toggleAllSignal, () => {
  const completed = !allTodosAreCompleted();

  todoIds().forEach((id) => {
    todos.select(id).produce((state) => {
      if (!state) return;
      state.completed = completed;
    });
  });
});

import { memo, on } from 'spred';
import { removeCompletedTodosSignal, removeTodos } from './remove';
import { allTodos, allTodosCount } from './todos-all';

export const completedTodos = memo(() =>
  allTodos().filter((todo) => todo.completed)
);

export const completedTodoIds = memo(() =>
  completedTodos().map((todo) => todo.id)
);

export const completedTodosCount = memo(() => completedTodos().length);

export const allTodosAreCompleted = memo(
  () => !!allTodosCount() && completedTodosCount() === allTodosCount()
);

on(removeCompletedTodosSignal, () => {
  removeTodos(completedTodoIds());
});

import { computed, on } from 'spred';
import { removeCompletedSignal, removeTodos } from './remove';
import { $allTodos, $allTodosCount } from './todos-all';

export const $completedTodos = computed(() =>
  $allTodos().filter((todo) => todo.completed)
);

export const $completedTodoIds = computed(() =>
  $completedTodos().map((todo) => todo.id)
);

export const $completedTodosCount = computed(() => $completedTodos().length);

export const $allTodosAreCompleted = computed(
  () => !!$allTodosCount() && $completedTodosCount() === $allTodosCount()
);

on(removeCompletedSignal, () => {
  removeTodos($completedTodoIds());
});

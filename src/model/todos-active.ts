import { computed } from 'spred';
import { $allTodos } from './todos-all';

export const $activeTodos = computed(() =>
  $allTodos().filter((todo) => !todo.completed)
);

export const $activeTodoIds = computed(() =>
  $activeTodos().map((todo) => todo.id)
);

export const $activeTodosCount = computed(() => $activeTodos().length);

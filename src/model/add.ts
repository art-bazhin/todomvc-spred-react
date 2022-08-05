import { computed, signal } from 'spred';
import { createTodo } from './todo';

const [_addTodo, addTodo] = signal<string>();

const addTodoSignal = computed(() => {
  const description = _addTodo();
  if (!description) return;

  return createTodo(description);
});

export { addTodoSignal, addTodo };

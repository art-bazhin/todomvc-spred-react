import { computed, on, signal } from 'spred';
import { createTodo } from './todo';
import { todoIdsStore, todosStore } from './todos-all';

const [_addTodo, addTodo] = signal<string>();

const addTodoSignal = computed(() => {
  const description = _addTodo();
  if (!description) return;

  return createTodo(description);
});

export { addTodo, addTodoSignal };

on(addTodoSignal, (todo) => {
  todoIdsStore.update((state) => {
    state.push(todo.id);
  });

  todosStore.update((state) => {
    state[todo.id] = todo;
  });
});

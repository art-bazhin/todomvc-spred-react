import { computed, on, signal } from 'spred';
import { createTodo } from './todo';
import { todoIds, todos } from './todos-all';

const [_addTodo, addTodo] = signal<string>();

const addTodoSignal = computed(() => {
  const description = _addTodo();
  if (!description) return;

  return createTodo(description);
});

export { addTodo, addTodoSignal };

on(addTodoSignal, (todo) => {
  todoIds.update((state) => {
    state.push(todo.id);
  });

  todos.update((state) => {
    state[todo.id] = todo;
  });
});

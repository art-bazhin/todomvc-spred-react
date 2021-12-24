import { on, signal, memo } from 'spred';
import { Todo } from './todo';

export const [$newTodoDescription, setNewTodoDescription] = signal('');
export const [$addTodo, addTodo] = signal<Todo>();

export const $trimmedNewTodoDescription = memo(() =>
  $newTodoDescription().trim()
);

on($addTodo, () => setNewTodoDescription(''));

import { signal } from 'spred';
import { Todo } from './todo';

export const [$toggleTodo, toggleTodo] = signal<Todo>();
export const [$toggleAll, toggleAll] = signal();

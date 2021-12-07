import { signal } from 'spred';
import { Todo } from './todo';

export const [toggleTodoSignal, toggleTodo] = signal<Todo>();
export const [toggleAllSignal, toggleAll] = signal();

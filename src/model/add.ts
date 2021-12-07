import { on, signal, writable } from 'spred';
import { Todo } from './todo';

export const $newTodoDescription = writable('');
export const [addTodoSignal, addTodo] = signal<Todo>();

on(addTodoSignal, () => $newTodoDescription(''));

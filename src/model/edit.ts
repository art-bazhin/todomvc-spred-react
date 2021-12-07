import { on, readonly, signal, writable } from 'spred';
import { removeTodo } from './remove';
import { Todo } from './todo';

type EditedTodo = Todo;

const _$editedTodo = writable<Todo | null>(null);
export const $editedTodo = readonly(_$editedTodo);

export const [startEditTodoSignal, startEditTodo] = signal<Todo>();
export const [endEditTodoSignal, endEditTodo] = signal<EditedTodo>();

on(startEditTodoSignal, (todo) => {
  _$editedTodo(todo);
});

on(endEditTodoSignal, (payload) => {
  _$editedTodo(null);
  if (!payload.description) removeTodo(payload.id);
});

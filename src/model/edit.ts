import { on, signal } from 'spred';
import { removeTodos } from './remove';
import { Todo } from './todo';

type EditedTodo = Todo;

export const [editedTodo, setEditedTodo] = signal<Todo | null>(null);
export const [editTodoSignal, editTodo] = signal<EditedTodo>();

on(editTodoSignal, (todo) => {
  setEditedTodo(null);
  if (!todo.description) removeTodos([todo.id]);
});

(window as any).test = editTodo;

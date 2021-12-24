import { on, signal, batch } from 'spred';
import { removeTodos } from './remove';
import { Todo } from './todo';

type EditedTodo = Todo;

export const [$editedTodo, setEditedTodo] = signal<Todo | null>(null);
export const [$editTodo, editTodo] = signal<EditedTodo>();

on($editTodo, (todo) => {
  batch(() => {
    setEditedTodo(null);
    if (!todo.description) removeTodos([todo.id]);
  });
});

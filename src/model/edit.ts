import { on, signal } from 'spred';
import { removeTodos } from './remove';
import { TodoId } from './todo';
import { todos } from './todos-all';

export const [editingId, setEditingId] = signal<TodoId | null>(null);
export const [endEditSignal, endEdit] = signal<{
  id: TodoId;
  description: string;
}>();

on(endEditSignal, ({ id, description }) => {
  setEditingId(null);

  if (!description) {
    removeTodos([id]);
    return;
  }

  todos.select(id).produce((state) => {
    if (!state) return;
    state.description = description;
  });
});

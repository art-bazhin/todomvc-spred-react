import { on, signal } from 'spred';
import { removeTodos } from './remove';
import { TodoId } from './todo';
import { todosStore } from './todos-all';

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

  todosStore.select(id).update((state) => {
    if (!state) return;
    state.description = description;
  });
});

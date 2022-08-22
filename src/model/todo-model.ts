import { memo, Signal } from 'spred';
import { editingId, endEdit, setEditingId } from './edit';
import { removeTodos } from './remove';
import { Todo } from './todo';
import { toggleTodo } from './toggle';

const FALLBACK_TODO: Todo = {
  id: '-',
  description: '-',
  completed: false,
};

export function createTodoModel(todoSignal: Signal<Todo | null>) {
  const todo = memo(() => todoSignal() || FALLBACK_TODO);
  const editing = memo(() => todo().id === editingId());

  return {
    todo,
    editing,

    toggle() {
      toggleTodo(todo().id);
    },

    startEdit() {
      setEditingId(todo().id);
    },

    endEdit(description: string) {
      endEdit({ id: todo().id, description });
    },

    remove() {
      removeTodos([todo().id]);
    },
  };
}

export type TodoModel = ReturnType<typeof createTodoModel>;

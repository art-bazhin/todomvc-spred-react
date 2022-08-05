import { memo, Signal } from 'spred';
import { editedTodo, editTodo, setEditedTodo } from './edit';
import { removeTodos } from './remove';
import { Todo } from './todo';
import { toggleTodo } from './toggle';

const FALLBACK_TODO: Todo = {
  id: 'REMOVED',
  description: 'REMOVED',
  completed: false,
};

export function createTodoModel(todoSignal: Signal<Todo | null>) {
  const todo = memo(() => todoSignal() || FALLBACK_TODO);
  const editing = memo(() => todo() === editedTodo());

  return {
    todo,
    editing,

    toggle() {
      toggleTodo(todo());
    },

    startEdit() {
      setEditedTodo(todo());
    },

    endEdit(newDescription: string) {
      editTodo({
        ...todo(),
        description: newDescription,
      });
    },

    remove() {
      removeTodos([todo().id]);
    },
  };
}

export type TodoModel = ReturnType<typeof createTodoModel>;

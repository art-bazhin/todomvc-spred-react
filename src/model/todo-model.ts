import { memo } from 'spred';
import { $editedTodo, editTodo, setEditedTodo } from './edit';
import { removeTodos } from './remove';
import { getTodoAtom } from './store';
import { toggleTodo } from './toggle';

export function createTodoModel(id: string) {
  const $todo = getTodoAtom(id);
  const $editing = memo(() => $todo() === $editedTodo());

  return {
    $todo,
    $editing,

    toggle() {
      const todo = $todo();
      if (!todo) return;

      toggleTodo(todo);
    },

    startEdit() {
      const todo = $todo();
      if (!todo) return;

      setEditedTodo(todo);
    },

    endEdit(newDescription: string) {
      const todo = $todo();
      if (!todo) return;

      editTodo({
        ...todo,
        description: newDescription,
      });
    },

    remove() {
      removeTodos([id]);
    },
  };
}

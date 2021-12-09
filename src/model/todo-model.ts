import { computed } from 'spred';
import { $editedTodo, endEditTodo, startEditTodo } from './edit';
import { removeTodos } from './remove';
import { getTodoAtom } from './store';
import { toggleTodo } from './toggle';

export function createTodoModel(id: string) {
  const $todo = getTodoAtom(id);
  const $editing = computed(() => $todo() === $editedTodo());

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

      startEditTodo(todo);
    },

    endEdit(newDescription: string) {
      const todo = $todo();
      if (!todo) return;

      endEditTodo({
        ...todo,
        description: newDescription,
      });
    },

    remove() {
      removeTodos([id]);
    },
  };
}

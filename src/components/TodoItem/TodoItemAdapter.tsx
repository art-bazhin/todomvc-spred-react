import { memo } from 'react';
import { computed } from 'spred';
import { useAtom } from 'spred-react';
import { $editedTodo, endEditTodo, startEditTodo } from '../../model/edit';
import { removeTodo } from '../../model/remove';
import { getTodoAtom, getTodo } from '../../model/store';
import { toggleTodo } from '../../model/toggle';
import { TodoItem } from './TodoItem';

interface TodoItemAdapterProps {
  id: string;
}

export const TodoItemAdapter = memo(({ id }: TodoItemAdapterProps) => {
  const todo = useAtom(getTodoAtom(id), [id]);
  const editing = useAtom(
    () => computed(() => getTodo(id) === $editedTodo()),
    [id]
  );

  if (!todo) return null;

  return (
    <TodoItem
      todo={todo}
      editing={editing}
      toggle={() => toggleTodo(todo)}
      remove={() => removeTodo(todo.id)}
      startEdit={() => startEditTodo(todo)}
      endEdit={(description) =>
        endEditTodo({
          ...todo,
          description,
        })
      }
    />
  );
});

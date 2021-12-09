import { memo, useMemo } from 'react';
import { useAtom } from 'spred-react';
import { createTodoModel } from '../../model/todo-model';
import { TodoItem } from './TodoItem';

interface TodoItemAdapterProps {
  id: string;
}

export const TodoItemAdapter = memo(({ id }: TodoItemAdapterProps) => {
  const model = useMemo(() => createTodoModel(id), [id]);

  const todo = useAtom(model.$todo, [model]);
  const editing = useAtom(model.$editing, [model]);

  if (!todo) return null;

  return (
    <TodoItem
      todo={todo}
      editing={editing}
      toggle={model.toggle}
      remove={model.remove}
      startEdit={model.startEdit}
      endEdit={model.endEdit}
    />
  );
});

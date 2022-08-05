import { memo, useMemo } from 'react';
import { useSignal } from 'spred-react';
import { getTodoSignal } from '../../model/store';
import { createTodoModel } from '../../model/todo-model';
import { TodoItem } from './TodoItem';

interface TodoItemAdapterProps {
  id: string;
}

export const TodoItemAdapter = memo(({ id }: TodoItemAdapterProps) => {
  const model = useMemo(() => createTodoModel(getTodoSignal(id)), [id]);

  const todo = useSignal(model.todo, [model]);
  const editing = useSignal(model.editing, [model]);

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

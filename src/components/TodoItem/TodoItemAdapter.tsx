import { memo, useMemo } from 'react';
import { Signal } from 'spred';
import { useSignal } from 'spred-react';
import { Todo } from '../../model/todo';
import { createTodoModel } from '../../model/todo-model';
import { TodoItem } from './TodoItem';

interface TodoItemAdapterProps {
  todo: Signal<Todo | null>;
}

export const TodoItemAdapter = memo(({ todo }: TodoItemAdapterProps) => {
  const model = useMemo(() => createTodoModel(todo), [todo]);

  const _todo = useSignal(model.todo, [model]);
  const editing = useSignal(model.editing, [model]);

  if (!todo) return null;

  return (
    <TodoItem
      todo={_todo}
      editing={editing}
      toggle={model.toggle}
      remove={model.remove}
      startEdit={model.startEdit}
      endEdit={model.endEdit}
    />
  );
});

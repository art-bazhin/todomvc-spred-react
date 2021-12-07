import { memo } from 'react';
import { useAtom } from 'spred-react';
import { $allTodosCount } from '../../model/todos-all';
import { $allTodosAreCompleted } from '../../model/todos-completed';
import { $filteredTodoIds } from '../../model/todos-filtered';
import { toggleAll } from '../../model/toggle';
import { TodoItemAdapter } from '../TodoItem/TodoItemAdapter';

export const TodoList = memo(() => {
  console.log('render TodoList');

  const allTodosCount = useAtom($allTodosCount);
  const allTodosAreCompleted = useAtom($allTodosAreCompleted);
  const filteredTodoIds = useAtom($filteredTodoIds);

  return (
    <section className="main">
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        checked={allTodosAreCompleted}
        onChange={toggleAll}
      />
      {allTodosCount ? (
        <label htmlFor="toggle-all">Mark all as complete</label>
      ) : null}

      <ul className="todo-list">
        {filteredTodoIds.map((id) => (
          <TodoItemAdapter id={id} key={id} />
        ))}
      </ul>
    </section>
  );
});

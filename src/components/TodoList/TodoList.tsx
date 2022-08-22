import { memo } from 'react';
import { useSignal } from 'spred-react';
import { allTodosCount } from '../../model/todos-all';
import { allTodosAreCompleted } from '../../model/todos-completed';
import { filteredTodos } from '../../model/todos-filtered';
import { toggleAll } from '../../model/toggle';
import { TodoItemAdapter } from '../TodoItem/TodoItemAdapter';

export const TodoList = memo(() => {
  console.log('render TodoList');

  const _allTodosCount = useSignal(allTodosCount);
  const _allTodosAreCompleted = useSignal(allTodosAreCompleted);
  const _filteredTodos = useSignal(filteredTodos);

  return (
    <section className="main">
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        checked={_allTodosAreCompleted}
        onChange={toggleAll}
      />
      {_allTodosCount ? (
        <label htmlFor="toggle-all">Mark all as complete</label>
      ) : null}

      <ul className="todo-list">
        {_filteredTodos.map((todo) => (
          <TodoItemAdapter todo={todo} key={todo()!.id} />
        ))}
      </ul>
    </section>
  );
});

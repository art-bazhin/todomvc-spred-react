import { memo } from 'react';
import { useSignal } from 'spred-react';
import { $filter, TodoFilter } from '../../model/filter';
import { removeCompleted } from '../../model/remove';
import { $activeTodosCount } from '../../model/todos-active';
import { $allTodosCount } from '../../model/todos-all';
import { $completedTodosCount } from '../../model/todos-completed';

export const Footer = memo(() => {
  console.log('render Footer');

  const filter = useSignal($filter);
  const allTodosCount = useSignal($allTodosCount);
  const activeTodosCount = useSignal($activeTodosCount);
  const completedTodosCount = useSignal($completedTodosCount);
  const isPlural = activeTodosCount !== 1;

  if (!allTodosCount) return null;

  function getClassName(targetFilter: TodoFilter) {
    return filter === targetFilter ? 'selected' : '';
  }

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeTodosCount}</strong> item{isPlural ? 's' : ''} left
      </span>
      <ul className="filters">
        <li>
          <a className={getClassName('all')} href="#/">
            All
          </a>
        </li>
        <li>
          <a className={getClassName('active')} href="#/active">
            Active
          </a>
        </li>
        <li>
          <a className={getClassName('completed')} href="#/completed">
            Completed
          </a>
        </li>
      </ul>
      {completedTodosCount ? (
        <button className="clear-completed" onClick={removeCompleted}>
          Clear completed
        </button>
      ) : null}
    </footer>
  );
});

import { memo } from 'react';
import { useSignal } from 'spred-react';
import { activeFilter, TodoFilter } from '../../model/active-filter';
import { activeTodosCount } from '../../model/todos-active';
import { allTodosCount } from '../../model/todos-all';
import {
  completedTodosCount,
  removeCompetedTodos,
} from '../../model/todos-completed';

export const Footer = memo(() => {
  console.log('render Footer');

  const _filter = useSignal(activeFilter);
  const _allTodosCount = useSignal(allTodosCount);
  const _activeTodosCount = useSignal(activeTodosCount);
  const _completedTodosCount = useSignal(completedTodosCount);
  const isPlural = _activeTodosCount !== 1;

  if (!_allTodosCount) return null;

  function getClassName(targetFilter: TodoFilter) {
    return _filter === targetFilter ? 'selected' : '';
  }

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{_activeTodosCount}</strong> item{isPlural ? 's' : ''} left
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
      {_completedTodosCount ? (
        <button className="clear-completed" onClick={removeCompetedTodos}>
          Clear completed
        </button>
      ) : null}
    </footer>
  );
});

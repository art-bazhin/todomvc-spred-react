import { memo } from 'spred';
import { activeFilter } from './active-filter';
import { activeTodos } from './todos-active';
import { allTodos } from './todos-all';
import { completedTodos } from './todos-completed';

export const filteredTodos = memo(() => {
  switch (activeFilter()) {
    case 'all':
      return allTodos();
    case 'active':
      return activeTodos();
    case 'completed':
      return completedTodos();
  }
});

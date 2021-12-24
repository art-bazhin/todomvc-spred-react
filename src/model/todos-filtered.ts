import { memo } from 'spred';
import { $filter } from './filter';
import { $activeTodoIds } from './todos-active';
import { $allTodoIds } from './todos-all';
import { $completedTodoIds } from './todos-completed';

export const $filteredTodoIds = memo(() => {
  switch ($filter()) {
    case 'all':
      return $allTodoIds();
    case 'active':
      return $activeTodoIds();
    case 'completed':
      return $completedTodoIds();
  }
});

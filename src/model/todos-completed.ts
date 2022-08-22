import { memo } from 'spred';
import { removeTodos } from './remove';
import { allTodos, allTodosCount } from './todos-all';

export const completedTodos = memo(() =>
  allTodos().filter((todo) => todo() && todo()!.completed)
);

export const completedTodoIds = memo(() =>
  completedTodos().map((todo) => todo()! && todo()!.id)
);

export const completedTodosCount = memo(() => completedTodos().length);

export const allTodosAreCompleted = memo(
  () => !!allTodosCount() && completedTodosCount() === allTodosCount()
);

export function removeCompetedTodos() {
  removeTodos(completedTodoIds());
}

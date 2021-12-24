import { on, signal, memo } from 'spred';
import { $addTodo } from './add';
import { $removeTodos } from './remove';
import { getLocalStorageIds, setLocalStorageIds } from './local-storage';
import { getTodo } from './store';
import { Todo } from './todo';

const todoIds = getLocalStorageIds();

export const [$allTodoIds, setAllTodoIds] = signal(todoIds);

export const $allTodos = memo(() =>
  $allTodoIds().reduce((acc, cur) => {
    const todo = getTodo(cur);
    if (todo) acc.push(todo);
    return acc;
  }, [] as Todo[])
);

export const $allTodosCount = memo(() => $allTodoIds().length);

on($allTodoIds, setLocalStorageIds);

on($addTodo, (todo) => {
  const arr = $allTodoIds();

  arr.push(todo.id);
  setAllTodoIds(arr);
});

on($removeTodos, (removedTodoIds) => {
  const ids = $allTodoIds();

  setAllTodoIds(ids.filter((id) => !removedTodoIds.includes(id)));
});

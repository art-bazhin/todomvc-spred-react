import { computed, on, readonly, writable } from 'spred';
import { addTodoSignal } from './add';
import { removeTodoSignal } from './remove';
import { getLocalStorageIds, setLocalStorageIds } from './local-storage';
import { getTodo } from './store';
import { Todo } from './todo';

const todoIds = getLocalStorageIds();
const _$allTodoIds = writable<string[]>(todoIds);

export const $allTodoIds = readonly(_$allTodoIds);

export const $allTodos = computed(() =>
  $allTodoIds().reduce((acc, cur) => {
    const todo = getTodo(cur);
    if (todo) acc.push(todo);
    return acc;
  }, [] as Todo[])
);

export const $allTodosCount = computed(() => $allTodoIds().length);

on(_$allTodoIds, setLocalStorageIds);

on(addTodoSignal, (todo) => {
  _$allTodoIds().push(todo.id);
  _$allTodoIds.notify();
});

on(removeTodoSignal, (removedTodoId) => {
  const ids = _$allTodoIds();
  _$allTodoIds(ids.filter((id) => id !== removedTodoId));
});

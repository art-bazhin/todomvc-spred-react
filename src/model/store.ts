import { on, store } from 'spred';
import { $addTodo } from './add';
import { $editTodo } from './edit';
import { $allTodos } from './todos-all';
import { $removeTodos } from './remove';
import { getLocalStorageData, setLocalStorageData } from './local-storage';
import { Todo, TodoId } from './todo';
import { $toggleAll, $toggleTodo } from './toggle';
import { $allTodosAreCompleted } from './todos-completed';

const todoStore = store<Todo>(getLocalStorageData());

export const getTodoAtom = (id: TodoId) => todoStore.getSignal(id);
export const getTodo = (id: TodoId) => todoStore.get(id);

on(todoStore.data, setLocalStorageData);

on($addTodo, (todo) => {
  todoStore.set(todo);
});

on($toggleTodo, (todo) => {
  todoStore.set({
    ...todo,
    completed: !todo.completed,
  });
});

on($toggleAll, () => {
  const completed = !$allTodosAreCompleted();
  const updatedTodos = $allTodos().map((todo) => {
    return {
      ...todo,
      completed,
    };
  });

  todoStore.set(updatedTodos);
});

on($editTodo, (todo) => {
  if (!todo.description) return;
  todoStore.set(todo);
});

on($removeTodos, (ids) => {
  todoStore.delete(ids);
});

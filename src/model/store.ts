import { on, store } from 'spred';
import { addTodoSignal } from './add';
import { endEditTodoSignal } from './edit';
import { $allTodos } from './todos-all';
import { removeTodosSignal } from './remove';
import { getLocalStorageData, setLocalStorageData } from './local-storage';
import { Todo, TodoId } from './todo';
import { toggleAllSignal, toggleTodoSignal } from './toggle';
import { $allTodosAreCompleted } from './todos-completed';

const todoStore = store<Todo>(getLocalStorageData());

export const getTodoAtom = (id: TodoId) => todoStore.getAtom(id);
export const getTodo = (id: TodoId) => todoStore.get(id);

on(todoStore.data, setLocalStorageData);

on(addTodoSignal, (todo) => {
  todoStore.set(todo);
});

on(toggleTodoSignal, (todo) => {
  todoStore.set({
    ...todo,
    completed: !todo.completed,
  });
});

on(toggleAllSignal, () => {
  const completed = !$allTodosAreCompleted();
  const updatedTodos = $allTodos().map((todo) => {
    return {
      ...todo,
      completed,
    };
  });

  todoStore.set(updatedTodos);
});

on(endEditTodoSignal, (todo) => {
  if (!todo.description) return;
  todoStore.set(todo);
});

on(removeTodosSignal, (id) => {
  todoStore.delete(id);
});

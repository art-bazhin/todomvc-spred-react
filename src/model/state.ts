import { Todo, TodoId } from './todo';

export interface AppState {
  todos: Record<TodoId, Todo | undefined>;
  todoIds: TodoId[];
}

export const INITIAL_STATE: AppState = {
  todos: {},
  todoIds: [],
};

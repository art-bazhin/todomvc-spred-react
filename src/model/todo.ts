import { maxId } from './todos-all';

export type TodoId = string;

export interface Todo {
  id: TodoId;
  description: string;
  completed: boolean;
}

let idCounter = maxId() || 0;

export function createTodo(description: string): Todo {
  return {
    id: ++idCounter + '',
    completed: false,
    description,
  };
}

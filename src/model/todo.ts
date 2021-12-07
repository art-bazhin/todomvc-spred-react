import { getLocalStorageMaxIdNumber } from './local-storage';

export type TodoId = string;

export interface Todo {
  id: TodoId;
  description: string;
  completed: boolean;
}

let idCounter = getLocalStorageMaxIdNumber();

export function createTodo(description: string): Todo {
  return {
    id: ++idCounter + '',
    completed: false,
    description,
  };
}

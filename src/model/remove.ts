import { signal } from 'spred';
import { TodoId } from './todo';

export const [$removeTodos, removeTodos] = signal<TodoId[]>();
export const [$removeCompleted, removeCompleted] = signal();

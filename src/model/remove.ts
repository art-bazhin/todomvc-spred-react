import { signal } from 'spred';
import { TodoId } from './todo';

export const [removeTodosSignal, removeTodos] = signal<TodoId[]>();
export const [removeCompletedSignal, removeCompleted] = signal();

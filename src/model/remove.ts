import { signal } from 'spred';
import { TodoId } from './todo';

export const [removeTodoSignal, removeTodo] = signal<TodoId>();
export const [removeCompletedSignal, removeCompleted] = signal();

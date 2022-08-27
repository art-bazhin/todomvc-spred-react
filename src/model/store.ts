import { on, store } from 'spred';
import { getLocalStorageState, setLocalStorageState } from './local-storage';
import { INITIAL_STATE } from './state';

export const state = store(getLocalStorageState() || INITIAL_STATE);

on(state, setLocalStorageState);

on(state, (v) => console.log(v));

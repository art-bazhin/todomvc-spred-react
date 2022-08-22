import { AppState } from './state';

const STATE_KEY = 'APP_STATE';

export function getLocalStorageState() {
  const str = localStorage.getItem(STATE_KEY);

  if (!str) return null;
  return JSON.parse(str) as AppState;
}

export function setLocalStorageState(state: AppState) {
  localStorage.setItem(STATE_KEY, JSON.stringify(state));
}

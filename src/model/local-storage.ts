import { Todo } from './todo';

interface TodoData {
  [key: string]: Todo | null;
}

const DATA_KEY = 'TODO_DATA';
const IDS_KEY = 'TODO_IDS';

const idsString = localStorage.getItem(IDS_KEY);
const ids: string[] = (idsString && JSON.parse(idsString)) || [];
const maxId = +[...ids].sort((a, b) => +b - +a)[0];

const dataString = localStorage.getItem(DATA_KEY);
const data: TodoData = (dataString && JSON.parse(dataString)) || {};

export function getLocalStorageData() {
  return data;
}

export function setLocalStorageData(data: TodoData) {
  localStorage.setItem(DATA_KEY, JSON.stringify(data));
}

export function getLocalStorageIds() {
  return ids;
}

export function setLocalStorageIds(ids: string[]) {
  localStorage.setItem(IDS_KEY, JSON.stringify(ids));
}

export function getLocalStorageMaxIdNumber() {
  return maxId || 0;
}

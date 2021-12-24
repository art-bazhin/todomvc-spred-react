import { memo, writable } from 'spred';

export type TodoFilter = 'all' | 'completed' | 'active';

const $hash = writable<string>(window.location.hash);

window.addEventListener('hashchange', () => {
  $hash(window.location.hash);
});

export const $filter = memo<TodoFilter>(() => {
  const hash = $hash();
  if (hash.substr(0, 2) !== '#/') return 'all';

  const filter = hash.substr(2);

  switch (filter) {
    case 'all':
    case 'completed':
    case 'active':
      return filter;
  }

  return 'all';
});

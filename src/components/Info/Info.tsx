import { memo } from 'react';

export const Info = memo(() => {
  console.log('render Info');

  return (
    <footer className="info">
      <p>Double-click to edit a todo</p>
      <p>
        Created by <a href="https://github.com/art-bazhin">Art Bazhin</a>
      </p>
      <p>
        Part of <a href="http://todomvc.com">TodoMVC</a>
      </p>
    </footer>
  );
});

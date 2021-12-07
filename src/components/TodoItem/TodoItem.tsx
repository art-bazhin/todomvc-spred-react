import { memo, useLayoutEffect, useRef } from 'react';
import { Todo } from '../../model/todo';

interface TodoItemProps {
  todo: Todo;
  editing: boolean;
  toggle: () => void;
  remove: () => void;
  startEdit: () => void;
  endEdit: (newDescription: string) => void;
}

export const TodoItem = memo(
  ({ todo, editing, toggle, remove, startEdit, endEdit }: TodoItemProps) => {
    console.log('render TodoItem', todo);

    const editInput = useRef<HTMLInputElement>(null);
    const edit = () => endEdit(editInput.current?.value || '');
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key !== 'Enter') return;
      e.preventDefault();
      edit();
    };

    useLayoutEffect(() => {
      if (editing) {
        if (!editInput.current) return;
        editInput.current.focus();
        editInput.current.value = todo.description;
      }
    }, [editing, todo.description]);

    const liClassList = [];
    if (todo.completed) liClassList.push('completed');
    if (editing) liClassList.push('editing');

    const liClass = liClassList.join(' ');

    return (
      <li className={liClass}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={todo.completed}
            onChange={toggle}
          />
          <label onDoubleClick={startEdit}>{todo.description}</label>
          <button className="destroy" onClick={remove}></button>
        </div>
        <input
          className="edit"
          ref={editInput}
          defaultValue={todo.description}
          onBlur={edit}
          onKeyDown={handleKeyDown}
        />
      </li>
    );
  }
);

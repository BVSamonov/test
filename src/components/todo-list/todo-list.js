import React from 'react';

import ToDoListItem from '../todo-list-item';
import './todo-list.css';

const TodoList = ({ todos, onDeleted, onImportant, onDone }) => {
  const renderItem = todos.map((item) => {
    const { id, ...itemProps } = item;

    return (
      <li key={id} className={`todo-list todo-list-${id}`}>
        <ToDoListItem
          {...itemProps}
          onDeleted={() => onDeleted(id)}
          onImportant={() => onImportant(id)}
          onDone={() => onDone(id)}
        />
      </li>
    );
  });

  return <ul className="todo-groupe">{renderItem}</ul>;
};

export default TodoList;

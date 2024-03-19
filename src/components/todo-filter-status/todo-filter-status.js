import React, { Component } from 'react';

import './todo-filter-status.css';

export default class TodoFilter extends Component {
  buttons = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'done', label: 'Done' },
  ];

  render() {
    const { filter, onFilterChange } = this.props;

    const buttons = this.buttons.map(({ name, label }) => {
      const clazz = ['filter-btn'];

      filter === name
        ? clazz.push('active-filter')
        : clazz.push('unactive-filter');

      return (
        <button
          type="button"
          className={clazz.join(' ')}
          key={name}
          onClick={() => onFilterChange(name)}
        >
          {label}
        </button>
      );
    });

    return <div className="todo-filter-status">{buttons}</div>;
  }
}

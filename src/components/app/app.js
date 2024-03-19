import React, { Component } from 'react';

import HeaderApp from '../header-app';
import SearchApp from '../search-app';
import ToDoList from '../todo-list';
import AddItem from '../add-item';

import './app.css';

export default class App extends Component {
  labelId = 100;

  state = {
    todoData: [
      this.currentItem('Drink Coffee'),
      this.currentItem('Build todo App'),
      this.currentItem('Have a lanch'),
    ],
    term: '',
    filter: 'all',
  };

  search = (items, text) => {
    if (text.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.label.toUpperCase().indexOf(text.toUpperCase()) > -1;
    });
  };

  filter = (items, category) => {
    switch (category) {
      case 'done':
        return items.filter((item) => item.done);
      case 'active':
        return items.filter((item) => !item.done);
      default:
        return items;
    }
  };

  onFilterChange = (filter) => {
    this.setState({ filter });
  };

  changeTerm = (term) => {
    this.setState({ term });
  };

  getDone = (id) => {
    this.setState({ filter: id });
  };

  currentItem(text) {
    return {
      label: text,
      important: false,
      done: false,
      id: this.labelId++,
    };
  }

  onItemAdded = (text) => {
    this.setState(({ todoData }) => {
      const item = {
        label: text,
        important: false,
        done: false,
        id: this.labelId++,
      };

      const newArr = [...todoData, item];

      return {
        todoData: newArr,
      };
    });
  };

  deleteId = (id) => {
    this.setState(({ todoData }) => {
      const correctArr = todoData.filter((value) => value.id !== id);

      return {
        todoData: correctArr,
      };
    });
  };

  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      return this.toggleItem(id, todoData, 'important');
    });
  };

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      return this.toggleItem(id, todoData, 'done');
    });
  };

  toggleItem = (id, todoData, props) => {
    const currentId = todoData.findIndex((value) => value.id === id);
    const oldItem = todoData[currentId];
    const newItem = { ...oldItem, [props]: !oldItem[props] };

    const newArr = [
      ...todoData.slice(0, currentId),
      newItem,
      ...todoData.slice(currentId + 1),
    ];

    return {
      todoData: newArr,
    };
  };

  render() {
    const { todoData, term, filter } = this.state;

    const visiableData = this.filter(this.search(todoData, term), filter);
    const done = todoData.filter((value) => value.done).length;
    const toDo = todoData.length - done;

    return (
      <div className="todo-wrapper">
        <HeaderApp done={done || 0} toDo={toDo || 0} />
        <SearchApp
          changeTerm={this.changeTerm}
          filter={filter}
          onFilterChange={this.onFilterChange}
        />
        <ToDoList
          todos={visiableData}
          onDeleted={this.deleteId}
          onImportant={this.onToggleImportant}
          onDone={this.onToggleDone}
        />
        <AddItem onItemAdded={this.onItemAdded} />
      </div>
    );
  }
}

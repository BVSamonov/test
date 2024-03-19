import React, { Component } from 'react';

import './add-item.css';

export default class AddItem extends Component {
  state = {
    label: '',
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onItemAdded(this.state.label);

    this.setState({
      label: '',
    });
  };

  addNewItem = (e) => {
    this.setState({
      label: e.target.value,
    });
  };

  render() {
    return (
      <form className="create-item-container" onSubmit={this.onSubmit}>
        <input
          type="text"
          placeholder="Add new list"
          className="text-item"
          onChange={this.addNewItem}
          value={this.state.label}
        ></input>
        <button type="submit" className="add-item-btn">
          Create
        </button>
      </form>
    );
  }
}

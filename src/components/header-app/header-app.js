import React from 'react';

import './header-app.css';

const HeaderApp = ({ done, toDo }) => {
  return (
    <div className="header-app">
      <h1 className="header-app__title">Todo List</h1>
      <span className="header-app__subtitle">
        {toDo} More todo, {done} Done
      </span>
    </div>
  );
};

export default HeaderApp;

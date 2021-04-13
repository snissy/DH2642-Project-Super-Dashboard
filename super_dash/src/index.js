import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {TopLevelTodo, TopLevelBootstrapExample, TopLevelSearchBar, TopLevelSWAPI, TopLevelClock, TopSidebar} from './componentTests';

ReactDOM.render(
  <React.StrictMode>
    <TopSidebar/>
  </React.StrictMode>,
  document.getElementById('root')
);


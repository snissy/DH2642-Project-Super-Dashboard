import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {TopLevelTodo, TopLevelBootstrapExample, TopLevelSearchBar, TopLevelSWAPI} from './componentTests';

ReactDOM.render(
  <React.StrictMode>
    <TopLevelSWAPI/>
  </React.StrictMode>,
  document.getElementById('root')
);


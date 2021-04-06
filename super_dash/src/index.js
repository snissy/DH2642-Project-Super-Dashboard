import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {TopLevelTodo, TopLevelBootstrapExample, TopLevelSearchBar} from './componentTests';

ReactDOM.render(
  <React.StrictMode>
    <TopLevelSearchBar/>
  </React.StrictMode>,
  document.getElementById('root')
);


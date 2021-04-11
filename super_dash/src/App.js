import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import background from "./img/Hoth.png"
import {TopLevelSearchBar, TopLevelTodo,} from "./componentTests"
import './css/App.css'

function App(props) {
  return (
      <div className={'App'} style={{backgroundImage: `url(${background})`}}>
          <h1>Super Dash</h1>
          <div className={'Searchbar'}><TopLevelSearchBar/></div>
          <div className={'Todo-list'}><TopLevelTodo/></div>
      </div>
  );
}
export default App;


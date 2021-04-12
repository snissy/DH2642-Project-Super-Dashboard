import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import background from "./img/Hoth.png"
import {TopLevelSearchBar} from "./componentTests"
import './css/App.css'
import TopLevelClock from "./componentTests.js"
import TodoPresenter from "./presenters/todoPresenter";

function App(props) {
  return (
      <div className={'App'} style={{backgroundImage: `url(${background})`}}>
          <h1>Super Dash</h1>
          <div className={'Searchbar'}><TopLevelSearchBar/></div>
          <div className={'Todo-list'}><TodoPresenter model={props.model}/></div>
      </div>
  );
}
export default App;
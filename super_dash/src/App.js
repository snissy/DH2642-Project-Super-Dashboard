import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import background from "./img/Hoth.png"
import {TopLevelSearchBar, TopLevelSWAPI, TopLevelClock} from "./componentTests"
import './css/App.css'
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

/* SWAPI Test code
function App(props) {
    return (
        <div>
            <TopLevelSWAPI model={props.model}/>
        </div>
    );
  }
*/


export default App;


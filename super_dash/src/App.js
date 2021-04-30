import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import background from "./img/Hoth.png"
import {TopLevelClock} from "./componentTests"
import './css/App.css'
import './css/weatherView.css'
import TodoPresenter from "./presenters/todoPresenter";
import SideBarPresenter from "./presenters/sidebarPresenter";
import SearchBarPresenter from "./presenters/searchBarPresenter";
import WeatherPresenter from "./presenters/weatherPresenter";

function App(props) {
  return (

      <div className={'App'} style={{backgroundImage: `url(${background})`}}>
          <h2>Super Dash</h2>
          <div><SideBarPresenter model={props.model}/></div>
          <div id={'Clock'}><TopLevelClock/></div>
          <div id={'Searchbar'}><SearchBarPresenter/></div>
          <div id={'Todo-list'}><TodoPresenter model={props.model}/></div>
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


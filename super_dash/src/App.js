import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import background from "./img/Hoth.png"
import {TopLevelSearchBar} from "./componentTests"
import './css/App.css'
import {TopLevelClock} from "./componentTests.js"
import TodoPresenter from "./presenters/todoPresenter";
import WeatherPresenter from "./presenters/weatherPresenter";
import SideBarPresenter from "./presenters/sidebarPresenter";

function App(props) {
  return (
      <div className={'App'} style={{backgroundImage: `url(${background})`}}>
          <h2>Super Dash</h2>
          <div className={'Searchbar'}><TopLevelSearchBar/></div>
          <div className={'Clock'}><TopLevelClock/></div>
          <div className={'Weather'}> <WeatherPresenter longitude={'18.063240'} latitude={'59.334591'}/></div>
          <div className={'Todo-list'}><TodoPresenter model={props.model}/></div>
          <div><SideBarPresenter/></div>
      </div>
  );
}
export default App;

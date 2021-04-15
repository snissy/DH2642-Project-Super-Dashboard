import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import background from "./img/Hoth.png"
import './css/App.css'
import TodoPresenter from "./presenters/todoPresenter";
import WeatherPresenter from "./presenters/weatherPresenter";
import SideBarPresenter from "./presenters/sidebarPresenter";
import SearchBarPresenter from "./presenters/searchBarPresenter";
import {TopLevelClock} from "./componentTests";
import SearchBarView from "./views/searchBarView";

function App(props) {
  return (

      <div className={'App'} style={{backgroundImage: `url(${background})`}}>
          <h2>Super Dash</h2>
          <div><SideBarPresenter/></div>
          <div id={'Clock'}><TopLevelClock/></div>
          <div id={'Searchbar'}><SearchBarView/></div>
          <div id={'Todo-list'}><TodoPresenter model={props.model}/></div>
      </div>
  );
}
export default App;

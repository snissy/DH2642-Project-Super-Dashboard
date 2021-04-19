import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import background from "./img/Hoth.png"
import {TopLevelSearchBar, TopLevelSWAPI, TopLevelClock} from "./componentTests"
import './css/App.css'
import TodoPresenter from "./presenters/todoPresenter";
import WeatherPresenter from "./presenters/weatherPresenter";

function App(props) {
  return (<div className={'weather'}><WeatherPresenter latitude={59.295273} longitude ={18.094105}/></div>);
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


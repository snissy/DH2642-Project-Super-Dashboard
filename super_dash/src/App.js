import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import background from "./assets/img/Hoth.png"
import {TopLevelClock} from "./componentTests"
import TodoPresenter from "./presenters/dashboardPresenters/todoPresenter";
import SideBarPresenter from "./presenters/siderbarPresenters/sidebarPresenter";
import SearchBarPresenter from "./presenters/dashboardPresenters/searchBarPresenter";
import WeatherPresenter from "./presenters/dashboardPresenters/weatherPresenter";
import CharacterDashPresenter from "./presenters/dashboardPresenters/characterDashPresenter";
import NewsPresenter from "./presenters/dashboardPresenters/newsPresenter";
import Visible from "./presenters/functionalPresenters/visibilityPresenter";
import './css/App.css'
import './css/newsView.css'
import './css/weatherView.css'
import Draggable from 'react-draggable';

function App(props) {

    // Coordinates for all draggable components are use as state
    const [currentCoordinates, setCoordinates] = React.useState(props.model.coordinates);

    // Tracks the position of a component, updates the models and state
    const trackPosition = (data, component) => {
        let newCoordinates = props.model.setCoordinates(component, data.deltaX, data.deltaY)
        setCoordinates(newCoordinates);
    }
    return (
        <div className={'App'} style={{backgroundImage: `url(${background})`}}>
            <h2>Super Dash</h2>
            <div>
                <SideBarPresenter model={props.model}/>
            </div>
            <div id={'Clock'}>
                <TopLevelClock/>
            </div>
            <div id={'Searchbar'}>
                <SearchBarPresenter/>
            </div>
            <Visible model={props.model} component="showCharacter">
                <div id={'CharacterDash'}><CharacterDashPresenter model={props.model}/></div>
            </Visible> 
            <Visible model={props.model} component="showTodo">
                <Draggable onDrag={(e, data) => {trackPosition(data, "todo"); console.log(props.model.coordinates.todo)}}
                            positionOffset={{x: props.model.coordinates.todo.x, y: props.model.coordinates.todo.y }}>
                    <div id={'Todo-list'}>
                        <TodoPresenter model={props.model}/>
                    </div>
                </Draggable>
            </Visible>
            <Visible model={props.model} component="showWeather">
                <Draggable onDrag={(e, data) => {trackPosition(data, "weather"); console.log(props.model.coordinates.weather)}}
                            positionOffset={{x: props.model.coordinates.weather.x, y: props.model.coordinates.weather.y}}>
                    <div id={'Weather'}>
                    <WeatherPresenter model = {props.model}/>
                    </div>
                </Draggable>
            </Visible>
            <Visible model={props.model} component="showNews">
                <Draggable>
                    <div id={'newsPresenter'}>
                        <NewsPresenter/>
                    </div>
                </Draggable>
            </Visible> 
      </div>
  ); 
}

export default App;


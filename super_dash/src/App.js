import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoPresenter from "./presenters/dashboardPresenters/todoPresenter";
import SideBarPresenter from "./presenters/siderbarPresenters/sidebarPresenter";
import SearchBarPresenter from "./presenters/dashboardPresenters/searchBarPresenter";
import WeatherPresenter from "./presenters/dashboardPresenters/weatherPresenter";
import CharacterDashPresenter from "./presenters/dashboardPresenters/characterDashPresenter";
import NewsPresenter from "./presenters/dashboardPresenters/newsPresenter";
import Visible from "./presenters/functionalPresenters/visibilityPresenter";
import ClockPresenter from "./presenters/dashboardPresenters/clockPresenter";
import './css/App.css';
import './css/weatherView.css';
import './css/newsView.css';
import './css/todoList.css';
import Draggable from 'react-draggable';


function App(props) {

    // Coordinates for all draggable components are use as state

    // Offset, relative positioning compared to start positioning, start at x=0, y=0 from model constructor. 
    const [relativeCoordinates, setRelativeCoordinates] = React.useState(props.model.coordinates);

    // Tracks the position of a component, updates the model and state

    // Update the component offset in model when a component is dragged.
    // data contains the offset changes in x and y 
    const trackPosition = (data, component) => {
        console.log("Track position: data.x=" + data.x +" data.y=" + data.y);
        props.model.setCoordinates(component, data.x, data.y)
    }

    const [planetURL, setPlanetURL] = React.useState(props.model.planetURL)

    React.useEffect( function () {
        function backgroundObserver() {setPlanetURL(props.model.planetURL)}

        function coordinatesObserver(){
            setRelativeCoordinates(props.model.coordinates)
        }

        props.model.addObserver(backgroundObserver)
        props.model.addObserver(coordinatesObserver)

        }
        // Todo: Return statement to demount observers (if needed?)

        ,[]);

    return (
        <div className={'App'} style={{backgroundImage: `url(${planetURL})`}}>

            <h2>Super Dash</h2>
            <div>
                <SideBarPresenter model={props.model}/>
            </div>
            <div id={'Clock'}>
                <ClockPresenter/>
            </div>
            <div id={'Searchbar'}>
                <SearchBarPresenter/>
            </div>
            <Visible model={props.model} component="showCharacter">
                <div id={'CharacterDash'}><CharacterDashPresenter model={props.model}/></div>
            </Visible>
            <Visible model={props.model} component="showTodo">
                <Draggable onStop={(e, data) => {trackPosition(data, "todo");}}
                            positionOffset={{x: relativeCoordinates.todo.x, y: relativeCoordinates.todo.y }}
                            >
                    <div id={'Todo-list'}>
                        <TodoPresenter model={props.model}/>
                    </div>
                </Draggable>
            </Visible>
            <Visible model={props.model} component="showWeather">
                <Draggable onStop={(e, data) => {trackPosition(data, "weather");}}
                           positionOffset={{x: relativeCoordinates.weather.x, y: relativeCoordinates.weather.y}}>
                    <div id={'Weather'}>
                        <WeatherPresenter model = {props.model}/>
                    </div>
                </Draggable>
            </Visible>
            <Visible model={props.model} component="showNews">
                <Draggable onStop={(e, data) => {trackPosition(data, "news");}}
                           positionOffset={{x: relativeCoordinates.news.x, y: relativeCoordinates.news.y}}>
                    <div id={'newsPresenter'}>
                        <NewsPresenter/>
                    </div>
                </Draggable>
            </Visible> 
      </div>
  ); 
}

export default App;


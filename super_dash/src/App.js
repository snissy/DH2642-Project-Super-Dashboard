import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {TopLevelClock} from "./componentTests"
import TodoPresenter from "./presenters/todoPresenter";
import SideBarPresenter from "./presenters/sidebarPresenter";
import SearchBarPresenter from "./presenters/searchBarPresenter";
import WeatherPresenter from "./presenters/weatherPresenter";
import CharacterDashPresenter from "./presenters/characterDashPresenter";
import NewsPresenter from "./presenters/newsPresenter";
import Visible from "./presenters/visibilityPresenter";
import './css/App.css'
import './css/weatherView.css'
import './css/newsView.css'
import Draggable from 'react-draggable';

function App(props) {

    // Coordinates for all draggable components are use as state
    const [currentCoordinates, setCoordinates] = React.useState(props.model.coordinates);

    // Tracks the position of a component, updates the model and state
    const trackPosition = (data, component) => {
        let newCoordinates = props.model.setCoordinates(component, data.deltaX, data.deltaY)
        setCoordinates(newCoordinates);
    }

    const [planetURL, setPlanetURL] = React.useState(props.model.planetURL)

    React.useEffect( function () {
        function backgroundObserver() {setPlanetURL(props.model.planetURL)}
        props.model.addObserver(backgroundObserver)}
        ,[]);

    return (
        <div className={'App'} style={{backgroundImage: `url(${planetURL})`}}>

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


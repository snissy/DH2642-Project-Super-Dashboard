import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoPresenter from "./presenters/dashboardPresenters/todoPresenter";
import SideBarPresenter from "./presenters/sidebarPresenters/sidebarPresenter";
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
import Loading from "./assets/img/Loading.png"


function App(props) {

    /* 
        Positioning offset, component placement relative to default positioning.
        By keeping as component State we can update it using an observer on app-load.
    */
    const [offset, setOffset] = React.useState(props.model.offset);


    /*
        Initial positioning of components on app-load.
        The offsets are added in <Draggable> for correct placement when firebase is loaded.
    */
    let defaultPositions = {
        todo: {
            x:100,
            y:0
        },
        weather: {
            x:800,
            y:0
        },
        news:{
            x:0,
            y:0
        }
    }

    /* 
        Updates the position offset in the model when a component is dragged.
        Parameter 'data' contains the component's x and y position (incl. default coordinates)
        Parameter 'component' tells which component has been dragged.
    */
    const trackPosition = (data, component) => {
        offset[component].x = data.x - defaultPositions[component].x;
        offset[component].y = data.y - defaultPositions[component].y;
        props.model.setAllOffset(offset);
    }

    // Storing information on which background to display.
    const [planetURL, setPlanetURL] = React.useState(props.model.planetURL)

    // Boolean value for displaying spinner on app-load.
    const [spinner, setSpinner] = React.useState(true);

 
    // When the app is loaded/created/mounted
    React.useEffect( function () {
        function backgroundObserver() {setPlanetURL(props.model.planetURL)}

        function offsetObserver(){
            setOffset(props.model.offset)
        }

        setTimeout(() => setSpinner(false), 1800)

        props.model.addObserver(backgroundObserver)
        props.model.addObserver(offsetObserver)

        }

        ,[]);
    if (spinner) return( <div><img src={Loading} className={'bg'}/> <div className={'loader'}></div></div>)
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
                           defaultPosition = {{x: defaultPositions["todo"].x + offset.todo.x, y: defaultPositions["todo"].y + offset.todo.y}} 
                >
                    <div id={'Todo-list'}>
                        <TodoPresenter model={props.model}/>
                    </div>
                </Draggable>
            </Visible>
            <Visible model={props.model} component="showWeather">
                <Draggable onStop={(e, data) => {trackPosition(data, "weather");}}
                           defaultPosition = {{x: defaultPositions["weather"].x + offset.weather.x, y: defaultPositions["weather"].y + offset.weather.y}}
                >
                    <div id={'Weather'}>
                        <WeatherPresenter model = {props.model}/>
                    </div>
                </Draggable>
            </Visible>
            <Visible model={props.model} component="showNews">
                <Draggable onStop={(e, data) => {trackPosition(data, "news");}}
                           defaultPosition = {{x: defaultPositions["news"].x + offset.news.x, y: defaultPositions["news"].y + offset.news.y}}
                >
                    <div id={'newsPresenter'}>
                        <NewsPresenter/>
                    </div>
                </Draggable>
            </Visible> 
      </div>
  ); 
}

export default App;


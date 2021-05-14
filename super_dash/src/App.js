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
import QuotePresenter from "./presenters/dashboardPresenters/quotePresenter";
import './css/App.css';
import './css/weatherView.css';
import './css/newsView.css';
import './css/todoList.css';
import './css/noCoordinates.css'
import Draggable from 'react-draggable';
import Loading from "./assets/img/Loading.png"


function App(props) {

    /* 
        Positioning Offset, component placement relative to default positioning.
        By keeping as component State we can update it using an observer on app-load.
    */
    const [offSet, setOffSet] = React.useState(props.model.coordinates);


    /*
        Initial positioning of components on app-load.
        The offSets are added in <Draggable> for correct placement when firebase is loaded.
    */
    let defaultPositions = {
        todo: {
            x:800,
            y:100
        },
        weather: {
            x:450,
            y:150
        },
        news:{
            x:0,
            y:-300
        }
    }

    /* 
        Updates the position offset in the model when a component is dragged.
        Parameter 'data' contains the component's x and y coordinates (incl. default coordinates)
        Parameter 'component' tells which component has been dragged.
    */
    const trackPosition = (data, component) => {
        offSet[component].x = data.x - defaultPositions[component].x;
        offSet[component].y = data.y - defaultPositions[component].y;
        props.model.setAllCoordinates(offSet);

    }

    // Storing information on which background to display.
    const [planetURL, setPlanetURL] = React.useState(props.model.planetURL)

    // Boolean value for displaying spinner on app-load.
    const [spinner, setSpinner] = React.useState(true);

 
    // When the app is loaded/created/mounted
    React.useEffect( function () {
        function backgroundObserver() {setPlanetURL(props.model.planetURL)}

        function coordinatesObserver(){
            setOffSet(props.model.coordinates)
        }

        setTimeout(() => setSpinner(false), 1800)

        props.model.addObserver(backgroundObserver)
        props.model.addObserver(coordinatesObserver)

        }
    ,[]);

    if (spinner){
        return( 
            <div><img src={Loading} className={'bg'} alt=""/> <div className={'loader'}></div></div>
        )
    }

    return (
        <div className={'App'} style={{backgroundImage: `url(${planetURL})`}}>

            <h2>Super Dash</h2>
            <div>
                <SideBarPresenter model={props.model}/>
            </div>
            <div id={'Clock'}>
                <ClockPresenter/>
            </div>
            <Visible model={props.model} component="showQuote">
                <div id={'Quote'}>
                    <QuotePresenter model={props.model}/>
                </div>
            </Visible>
            <div id={'Searchbar'}>
                <SearchBarPresenter/>
            </div>
            <Visible model={props.model} component="showCharacter">
                <div id={'CharacterDash'}><CharacterDashPresenter model={props.model}/></div>
            </Visible>
            <Visible model={props.model} component="showTodo">
                <Draggable onStop={(e, data) => {trackPosition(data, "todo");}}
                           defaultPosition = {{x: defaultPositions["todo"].x + offSet.todo.x, y: defaultPositions["todo"].y + offSet.todo.y}} 
                >
                    <div id={'Todo-list'}>
                        <TodoPresenter model={props.model}/>
                    </div>
                </Draggable>
            </Visible>
            <Visible model={props.model} component="showWeather">
                <Draggable onStop={(e, data) => {trackPosition(data, "weather");}}
                           defaultPosition = {{x: defaultPositions["weather"].x + offSet.weather.x, y: defaultPositions["weather"].y + offSet.weather.y}}
                >
                    <div id={'Weather'}>
                        <WeatherPresenter model = {props.model}/>
                    </div>
                </Draggable>
            </Visible>
            <Visible model={props.model} component="showNews">
                <Draggable onStop={(e, data) => {trackPosition(data, "news");}}
                           defaultPosition = {{x: defaultPositions["news"].x + offSet.news.x, y: defaultPositions["news"].y + offSet.news.y}}
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


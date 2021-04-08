import React from "react";
import TodoView from "./views/todoView";
import BootstrapExampleView from "./views/bootstrap_example";
import ClockPresenter from "./presenters/clockPresenter";
import SearchBarPresenter from "./presenters/searchBarPresenter";
import SwapiSource from './api/starwarsAPI'

// Use this component to test TodoView
export function TopLevelTodo() {

    let Tasks = ['städa', 'Träna', 'Tvätta', 'Handla'];
    const [currentTasks, setTasks] = React.useState(Tasks);

    return (
        <TodoView tasks={currentTasks}
                  addTask={function (task)
                  {if(task && !currentTasks.includes(task)) {setTasks([task, ...currentTasks]);}}}
                  removeTask={function (task)
                  { if(currentTasks.find(t => t === task)) {setTasks(currentTasks.filter(t => t !== task));}}}/>)
}

// Create new components below and export them to test them.




// Bootstrap example code
export function TopLevelBootstrapExample(){
    return (
        <BootstrapExampleView />
    )
}

//Clock component
 function TopLevelClock(){   
    const [time, setTime] = React.useState() 
    return(
        <ClockPresenter  time = {time} 
                updateTime = {setTime}/>
    )
}
export default TopLevelClock;

// Search bar view
export function TopLevelSearchBar(){
    return (
        <SearchBarPresenter test="hej123"/>
    )
}


// ------- Testing code for the SWAPI API ---------
export function TopLevelSWAPI(){
    const [num, setNum] = React.useState(5);
    // promise is initially set to null and setPromise is called to change the promise state.
    const [promise, setPromise] = React.useState(null);

    // On component creation: initial random search results with params = {}
    React.useEffect( function(){ 
        setPromise(SwapiSource.getSwapiDetails("people", 1)); 
    }, [] ); 

    // data and error are derived states from the promise state
    const [data, setData] = React.useState(null);
    const [error, setError] = React.useState(null);

    React.useEffect( function(){ 
        setData(null); 
        setError(null); 
        let cancelled=false;

        // When search is performed, promise will update.
        if(promise){   

            promise.then( function(dt) {
                if(!cancelled) setData(dt);

            }).catch( function(er){ 
                if(!cancelled) setError(er);
            });
        }
        
        return function(){ 
            cancelled=true;
        };
    }, [promise] ); // stateMember

    if(data)
        console.log(data);

    return(
        <div>
            It's working!
        </div>
    )
}
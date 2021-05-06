import React from "react"
import '../css/App.css'

function Visible(props){ 

    // props.component tells us which component that should be hidden or shown.
    const [visibleState, setVisibleState] = React.useState(props.model.preferences[props.component]);  
    
    React.useEffect( function(){

        function visibleObserver(){
            setVisibleState(props.model.preferences[props.component]);
        }
        
        props.model.addObserver(visibleObserver);

        return function(){
            props.model.removeObserver(visibleObserver);
        }
    }, []); 

    let visibleClass;
    if (visibleState === true)
        visibleClass = "";
    else{
        visibleClass = "hidden";
    }

    // Depending on whether the visibleState is true or false the returned div is shown or hidden.
    // props.children is the components inside <Visible>  </Visible>
 	return <div className={visibleClass}>{ props.children }</div>;
} 

export default Visible;
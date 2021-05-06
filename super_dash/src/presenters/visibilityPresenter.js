import React from "react"
import '../css/App.css'

function Visible(props){ 

    // props: skickar model + skickar vilken komponent det handlar om, news/todo/weather
    const [visibleState, setVisibleState] = React.useState(props.model.preferences[props.component]);  
    //const [visibleClass, setVisibleClass] = React.useState()
    // Lifecycle: Add observer on mount, remove it on demount.
    React.useEffect( function(){

        function visibleObserver(){
            setVisibleState(props.model.preferences[props.component]);
            console.log("Observern hört, visibleState = " + visibleState)
        }
        
        props.model.addObserver(visibleObserver);

        return function(){
            props.model.removeObserver(visibleObserver);
        }
    }, []); 

    
    /*React.useEffect( function(){
        console.log("Visible: useEffect!")
       
        if (visibleState === true) 
            setVisibleClass("")
        else {
            setVisibleClass("hidden")
        }
       
        
    }); */

    let visibleClass;
    if (visibleState===true)
        visibleClass = "";
    else{
        visibleClass = "hidden";
    }


    // Depending on whether the visibleState is true or false the returned div is shown or hidden.
    

    // props.children is the components inside <Visible>  </Visible>
 	return <div className={visibleClass}>{ props.children }</div>;
} 

export default Visible;
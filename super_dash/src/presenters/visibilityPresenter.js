import React from "react"

function Visible(props){ 

    // props: skickar model + skickar vilken komponent det handlar om, news/todo/weather
    const [visibleState, setVisibleState] = React.useState(props.model.preferences[props.component]);  


     // Lifecycle: Add observer on mount, remove it on demount.
     React.useEffect( function(){

        function visibleObserver(){
            setVisibleState(props.model.preferences[props.component]);
        }
        
        props.model.addObserver(visibleObserver);

        return function(){
            props.model.removeObserver(visibleObserver);
        }
    }, [props.model, props.component]); 

    // Depending on whether the visibleState is true or false the returned div is shown or hidden.
    let visibleClass = "" 

    if (visibleState) 
        visibleClass = ""
    else
        visibleClass = "hidden"

    // props.children is the component inside <Visible>  </Visible>
 	return <div class={visibleClass}>{ props.children }</div>;
} 

export default Visible;
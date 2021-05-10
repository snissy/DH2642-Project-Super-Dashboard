import Clock from "../views/clockView";
import React from "react";

function ClockPresenter(props) {
    const [time, setTime] = React.useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));

    //This declared the state of time at the very beginning so it will create a interval for updating the clock each second 
       
    React.useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })) 
        }, 1000);
        //if the clock component is finished it will be killed for stop using  memory
        return () => clearInterval(interval);
        }, []);

    return <Clock time={time}/>
}

export default ClockPresenter;
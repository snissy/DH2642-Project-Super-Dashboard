import Clock from "../views/clockView";
import React from "react";

function ClockPresenter(props) {
    const [time, setTime] = React.useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    return <Clock time={time}
                  updateTime ={setTime}/>
}

export default ClockPresenter;
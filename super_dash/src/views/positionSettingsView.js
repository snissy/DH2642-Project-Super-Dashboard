import {Button} from "react-bootstrap";
import React from "react";

function PositionSettingsView(props){
    return (<div>
        <strong>Position</strong>
        <p>Longitude: {props.coords.longitude ? props.coords.longitude.toFixed(2): "-"}° <br/>
        Latitude: {props.coords.latitude ? props.coords.latitude.toFixed(2): "-"}° </p>
        <Button onClick={props.fetchLocation}>Fetch Coordinates</Button>
    </div>)
}

export default PositionSettingsView;
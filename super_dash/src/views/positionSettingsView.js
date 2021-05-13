import {Button} from "react-bootstrap";
import React from "react";
import '../css/sidebar.css';

function PositionSettingsView(props){
    return (<div>
        <strong>Position</strong>
        <p> {props.position.geoName}<br/>
            Longitude: {props.position.longitude ? props.position.longitude.toFixed(2): "-"}° <br/>
            Latitude: {props.position.latitude ? props.position.latitude.toFixed(2): "-"}° </p>
        <Button id={"coordinate-button"} onClick={props.fetchLocation}>Fetch Coordinates</Button>
    </div>)
}

export default PositionSettingsView;
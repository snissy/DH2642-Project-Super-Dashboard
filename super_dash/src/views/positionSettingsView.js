import {Button} from "react-bootstrap";

function PositionSettingsView(props){
    return (<div>
        <strong>Position</strong>
        <p> {props.position.geoName}<br/>
            Longitude: {props.position.longitude ? props.position.longitude.toFixed(2): "-"}° <br/>
            Latitude: {props.position.latitude ? props.position.latitude.toFixed(2): "-"}° </p>
        <Button id={"coordinate-button"} onClick={props.fetchLocation} disabled={props.fetchingCoords}> {props.fetchingCoords?"Fetching your position...": "Fetch Position"}</Button>
    </div>)
}

export default PositionSettingsView;
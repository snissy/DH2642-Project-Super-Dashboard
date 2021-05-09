
import PositionSettingsView from "../views/positionSettingsView";
import React, {useState} from "react";

function PositionSettingsPresenter(props){

    const [coords, setCoords] = useState(props.model.coords);

    React.useEffect(  () => {
        props.model.addObserver(() => {
            setCoords(props.model.coords);
        });
    })

    return <PositionSettingsView coords = {coords}
                                 fetchLocation = {() =>{
                                     navigator.geolocation.getCurrentPosition((pos) => {
                                         props.model.setWeatherCoordinates(pos.coords.latitude, pos.coords.longitude);
                                     })
                                 }}
    />
}

export default PositionSettingsPresenter;
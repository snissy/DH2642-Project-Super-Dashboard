import PositionSettingsView from "../../views/positionSettingsView";
import React, {useState} from "react";
import GeographicNameSource from "../../api/geograficData";
import {roundToDecimal} from "../../helpFunctions/mathFunctions";

function PositionSettingsPresenter(props){

    const [position, setPosition] = useState(props.model.userPosition);

    React.useEffect(  () => {
        props.model.addObserver(() => {
            setPosition(props.model.userPosition);
        });
    })

    return <PositionSettingsView position = {position}
                                 fetchLocation = {() =>{
                                     navigator.geolocation.getCurrentPosition((pos) => {

                                         const lat = roundToDecimal(pos.coords.latitude, 3);
                                         const long = roundToDecimal(pos.coords.longitude,3);

                                         GeographicNameSource.getGeoName(long, lat).then(r => {
                                             let geoName = ""
                                             geoName += r.address.suburb ? r.address.suburb : "";
                                             geoName += r.address.city ? "-" + r.address.city: "";
                                             props.model.setUserPosition(lat, long, geoName );
                                             }
                                         )
                                     })
                                 }}
    />
}

export default PositionSettingsPresenter;
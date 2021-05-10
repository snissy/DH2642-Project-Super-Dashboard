
import PositionSettingsView from "../../views/positionSettingsView";
import React, {useState} from "react";
import GeographicNameSource from "../../api/geograficData";


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

                                         const lat = pos.coords.latitude;
                                         const long = pos.coords.longitude;

                                         GeographicNameSource.getGeoName(long, lat).then(r => {
                                             let geoName = ""
                                             geoName += r.address.suburb +"-";
                                             geoName += r.address.city;
                                             props.model.setUserPosition(lat, long, geoName );
                                             }
                                         )
                                     })
                                 }}
    />
}

export default PositionSettingsPresenter;
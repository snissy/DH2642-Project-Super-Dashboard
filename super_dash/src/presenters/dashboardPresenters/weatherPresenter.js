import WeatherView from "../../views/weatherView";
import WeatherSource from "../../api/smhiData";
import promiseNoData from "../functionalPresenters/promiseNoDataPresenter";
import usePromise from "../../customHooks/promiseHook";
import React, {useEffect, useState} from 'react';
import NoCoordinatesView from "../../views/noCoordinatesView";

function WeatherPresenter(props){

    const [promise, setPromise] = useState(null);

    useEffect(()=>{

        setPromise(WeatherSource.getWeatherDays(props.model.userPosition.longitude, props.model.userPosition.latitude))

        // This prevents callback to be run multiple times
        let oldPosition = props.model.userPosition;

        props.model.addObserver(()=>{
            if(oldPosition.latitude !== props.model.userPosition.latitude && oldPosition.longitude !== props.model.userPosition.longitude){
                oldPosition = props.model.userPosition;
                setPromise(WeatherSource.getWeatherDays(props.model.userPosition.longitude, props.model.userPosition.latitude));
            }
        })
    },[])

    const [data, error] = usePromise(promise);

    return(<div className="weather-presenter">
            {(props.model.userPosition.latitude ?
                promiseNoData(promise, data , error, "normal") || <WeatherView weatherDays={data} position = {props.model.userPosition}/>:
                <NoCoordinatesView/>)}
        </div>
    )
}
export default WeatherPresenter

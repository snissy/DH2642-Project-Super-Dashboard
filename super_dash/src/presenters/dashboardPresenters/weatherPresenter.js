import WeatherView from "../../views/weatherView";
import WeatherSource from "../../api/smhiData";
import promiseNoData from "../functionalPresenters/promiseNoDataPresenter";
import usePromise from "../../customHooks/promiseHook";
import React, {useEffect, useState} from 'react';

function WeatherPresenter(props){

    const [promise, setPromise] = useState(WeatherSource.getWeatherDays(props.model.userPosition.longitude, props.model.userPosition.latitude));

    useEffect(()=>{
        props.model.addObserver(()=>{
            setPromise(WeatherSource.getWeatherDays(props.model.userPosition.longitude, props.model.userPosition.latitude))
        })

    },[])

    const [data, error] = usePromise(promise);

    return(<div className="weather-presenter">
            {promiseNoData(promise, data , error, "normal") ||
            <WeatherView weatherDays={data} position = {props.model.userPosition}/>}
        </div>
    )
}
export default WeatherPresenter

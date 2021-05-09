import WeatherView from "../views/weatherView";
import WeatherSource from"../api/smhiData";
import promiseNoData from "./promiseNoDataPresenter";
import usePromise from "./promiseHook";
import React, {useEffect, useState} from 'react';

function WeatherPresenter(props){

    const [promise, setPromise] = useState(WeatherSource.getWeatherDays(props.model.coords.longitude, props.model.coords.latitude));

    useEffect(()=>{
        props.model.addObserver(()=>{
            setPromise(WeatherSource.getWeatherDays(props.model.coords.longitude, props.model.coords.latitude))
        })

    },[])

    const [data, error] = usePromise(promise);

    return(<div className="weather-presenter">
            {promiseNoData(promise, data , error, "normal") ||
            <WeatherView weatherDays={data}/>}
        </div>
    )
}
export default WeatherPresenter

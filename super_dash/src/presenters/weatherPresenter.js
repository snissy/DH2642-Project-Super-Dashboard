import WeatherView from "../views/weatherView";
import WeatherSource from"../api/smhiData";
import promiseNoData from "./promiseNoDataPresenter";
import usePromise from "./promiseHook";
import React, {useEffect, useState} from 'react';

function WeatherPresenter(props){
    // TODO Jag vet inte om det är är korrekt. Man kan säkert göra en generallt case för detta. Vill disskutera detta med Hector och Adam.
    const [promise, setPromise] = useState(null);

    useEffect(()=>{
        setPromise(WeatherSource.getWeatherDays(props.longitude, props.latitude))
    },[])

    const [data, error] = usePromise(promise);

    return(<div className="weather-presenter">
            {promiseNoData(promise, data , error) ||
            <WeatherView weatherDays={data}/>}
        </div>
    )
}
export default WeatherPresenter

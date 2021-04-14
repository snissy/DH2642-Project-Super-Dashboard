import WeatherView from "../views/weatherView";
import WeatherSource from"../api/smhiData";
import promiseNoData from "./promiseNoDataPresenter";
import PromiseHook from "./promiseHook";
import React, {useEffect, useState} from 'react';

function WeatherPresenter(props){
    // TODO Jag vet inte om det är är korrekt. Man kan säkert göra en generallt case för detta. Vill disskutera detta med Hector och Adam.
    const [promise, setPromise] = useState(null);

    React.useEffect(()=>{
        setPromise(WeatherSource.getWeatherDetails(18.123,59.042))
    },[])

    const [data, error] = PromiseHook(promise);

    return(<div className="weather-presenter">
            {promiseNoData(promise, data , error) ||
            <WeatherView data={data}/>}
        </div>
    )
}
export default WeatherPresenter

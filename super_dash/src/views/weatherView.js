function WeatherView(props) {

    const dayOne = props.weatherDays[0];
    const comingDays = [props.weatherDays[1], props.weatherDays[2], props.weatherDays[3]];
    return (
        <div className="weather-container weather-view">
            <div className="weatherRow">
                <div className={"weather-TodayCard"}>
                    <div className={"weather-day-position-titleDiv"}>
                        <p className={"weather-title"}>Currently </p>
                        <p className={"weather-position-title"}>{(props.position.geoName ? props.position.geoName : "")}</p>
                    </div>
                    <div className={"weather-dayOne-weatherData"}>
                        <div className={"weatherData-imgContainer"}>
                            <img className="weather-IconMedium" src={require('../assets/svg/weatherIcons/'+dayOne.Wsymb2+".svg").default} alt="" draggable="false"/>
                        </div>
                        <div className={"weather-dataContainer"}>
                            <div className={"dataContainer-row"}>
                                <div className={"dataCol"}>
                                    <p className={"weather-title"}>Temp</p>
                                </div>
                                <div className={"dataCol"}>
                                    <p className={"weather-data-paragraph"}>{dayOne.t[0].toFixed(1)} °c</p>
                                </div>
                            </div>
                            <div className={"dataContainer-row"}>
                                <div className={"dataCol"}>
                                    <p className={"weather-title"}>Rain</p>
                                </div>
                                <div className={"dataCol"}>
                                    <p className={"weather-data-paragraph"}>{dayOne.pmean[0].toFixed(1)} mm</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="weatherRow">
                {comingDays.map((day, index) =>{
                    return (<div className={"weather-dayCard day"+index} >
                        <div className="weather-dayCard-imgContainer">
                            <img className="weather-IconSmall" src={require('../assets/svg/weatherIcons/'+day.Wsymb2+".svg").default} alt="" draggable="false"/>
                        </div>
                        <div className="weather-dayCard-dataContainer row">
                            <p className="weather-title-small">{day.day}</p>
                            <p className="weather-text-small">{day.tMax}°c</p>
                        </div>
                    </div>)
                })}
            </div>
    </div>)
}

export default WeatherView;

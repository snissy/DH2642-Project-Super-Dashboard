import WeatherDay from "../dataStructures/weatherDay";

function gatherDataPoints(timeSeries, nDays =2){

    let weatherDayDict = {}

    const startHour = parseInt(timeSeries[0].validTime.substring(11,13))
    const nextDayIndex = 24-startHour

    weatherDayDict[timeSeries[0].validTime.substring(0,10)] = new WeatherDay("Today");
    weatherDayDict[timeSeries[nextDayIndex].validTime.substring(0,10)] = new WeatherDay("Tomorrow");

    timeSeries.forEach(timeElement =>{
        const date= timeElement.validTime.substring(0,10);
        if(!(date in weatherDayDict)){
            weatherDayDict[date] = new WeatherDay();
        }
        weatherDayDict[date].saveWeatherParams(timeElement);
    })


    return Object.keys(weatherDayDict).reduce((toRender, timeKey) => {
        const weatherDay = weatherDayDict[timeKey]
        weatherDay.calcDisplayData();
        return [...toRender,weatherDay]
    }, [])
}
export default gatherDataPoints
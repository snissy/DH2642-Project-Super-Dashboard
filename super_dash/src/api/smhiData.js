import {maxFunc, meanFunc, mostFrequentFunc, sumFunc} from "../helpFunctions/arrayMethods";
import {days} from "../helpFunctions/usefuleConstants";

const BASE_SMHI_URL = "https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/{longitude}/lat/{latitude}/data.json"
const dataToUse =  new Set(["t","ws","wd","msl", "tcc_mean", "pmean", "pcat", "Wsymb2"]);

/*
t =         C ,      Air temperature, Decimal number, one decimal
wd =        degree,  Wind direction, Integer
ws =        m/s,     Wind speed, Decimal number, one decimal
msl =       hPa,     Air pressure, Decimal number, one decimal
tcc_mean =  octas    Mean value of total cloud cover, Integer, 0-8
pmean =     mm/h 	 Mean precipitation intensity, Decimal number, one decimal
pcat =      category Precipitation category, Integer, 0-6
Wsymb2 =    code 	 Weather symbol, Integer, 1-27
*/

function WeatherDay(day="", date = ""){

    this.day = day;
    this.date = date;
    this.logedDays = [];

    dataToUse.forEach(p =>{
        this[p] = []
    })

    this.saveWeatherParams  = function(timeSeries){
        if(6 <= parseInt(timeSeries.validTime.substring(11,13)) <=18){

            this.logedDays.push(timeSeries.validTime);
            timeSeries.parameters.forEach(param =>{
                if(dataToUse.has(param.name)){
                    this[param.name].push(param.values[0]);
                }
            })
        }
    }

    this.calcDisplayData  = function (){

        this.date = this.logedDays[0].substring(0,10);

        if(day===""){
            this.day = days[(new Date(this.date)).getDay()];
        }
        this["tMax"] = maxFunc(this["t"]).toFixed(1);
        this["tMean"]= meanFunc(this["t"]).toFixed(1);
        this["wsMean"] = meanFunc(this["ws"]).toFixed(1);
        this["wsMax"] = maxFunc(this["ws"]).toFixed(1);
        this["pmeanSum"] = sumFunc(this["pmean"]).toFixed(1);
        this["pmeanMax"] = maxFunc(this["pmean"]).toFixed(1);
        this["mslMean"] = meanFunc(this["msl"]).toFixed(1);
        this["Wsymb2"] = mostFrequentFunc(this["Wsymb2"]);
    }
}

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

const  WeatherSource={

    // This function makes the actual api call to smhi
    apiCall(params) {

        // Here we replace longitude and respectively latitude for the place were we want our weather forecast

        let url_call = BASE_SMHI_URL.replace("{longitude}", params.longitude).replace("{latitude}", params.latitude);

        // The actual fetch
        return fetch(url_call, {
            "method": "GET"
        })
            .then(response => {if(response.status !== 200){
                // Something did not work
                throw new Error("Response code was not 200")
            }
                // Everything went ok
                return response;
            })
            // from HTTP headers to HTTP response data
            .then(response => response.json()).catch(error => {

                // The fetch failed
                console.log("There was some problem with the fetch", error)
            });
    },

    getWeatherDetails(longitude, latitude){
        // this function calls the apiCall and pass the asked longitude and latitude coordinates to the call.
        return WeatherSource.apiCall({longitude:longitude,latitude:latitude})
    },

    getWeatherDays(longitude, latitude){
        return WeatherSource.apiCall({longitude:longitude,latitude:latitude}).then(result=>{
            return gatherDataPoints(result.timeSeries)
        })
    }
}

export default WeatherSource;
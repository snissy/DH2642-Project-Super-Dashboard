import {days} from "../../helpFunctions/usefulConstants";
import {maxFunc, meanFunc, minFunc, mostFrequentFunc, sumFunc} from "../../helpFunctions/arrayMethods";

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
        const hour = parseInt(timeSeries.validTime.substring(11,13))

        if((5 <= hour && hour <=21) || this.day === "Today"){
            this.logedDays.push(timeSeries.validTime);
            timeSeries.parameters.forEach(param =>{
                if(dataToUse.has(param.name)){
                    this[param.name].push(param.values[0]);
                }
            })
        }
    }

    this.calcDisplayData  = function (){

        if(0<this.logedDays.length){

            this.date = this.logedDays[0].substring(0,10);

            if(day===""){
                this.day = days[(new Date(this.date)).getDay()];
            }
            this["tMax"] = maxFunc(this["t"]).toFixed(1);
            this["tMin"] = minFunc(this["t"]).toFixed(1);
            this["tMean"]= meanFunc(this["t"]).toFixed(1);

            this["wsMax"] = maxFunc(this["ws"]).toFixed(1);
            this["wsMin"] = minFunc(this["ws"]).toFixed(1);
            this["wsMean"] = meanFunc(this["ws"]).toFixed(1);

            this["pmeanMax"] = maxFunc(this["pmean"]).toFixed(1);
            this["pmeanMin"] = minFunc(this["pmean"]).toFixed(1);
            this["pmeanSum"] = sumFunc(this["pmean"]).toFixed(1);

            this["mslMean"] = meanFunc(this["msl"]).toFixed(1); // Tryck
            this["Wsymb2"] = mostFrequentFunc(this["Wsymb2"]);
        }
    }
}

export default WeatherDay

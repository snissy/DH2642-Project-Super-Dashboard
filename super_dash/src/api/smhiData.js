import gatherDataPoints from "../api/dataProcessors/processWeatherDays"
import okCoords from "../helpFunctions/geometricMethods";
import BasicJsonApiCall from "./basicFetcher";

const BASE_SMHI_URL = "https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/{longitude}/lat/{latitude}/data.json"

const  WeatherSource={

    // This function makes the actual api call to smhi
    apiCall(params) {

        // Here we replace longitude and respectively latitude for the place were we want our weather forecast

        let url_call = BASE_SMHI_URL.replace("{longitude}", params.longitude).replace("{latitude}", params.latitude);

        // The actual fetch
        return BasicJsonApiCall({baseUrl:url_call});
    },

    getWeatherDays(longitude, latitude){

        if(!okCoords(longitude, latitude)){
            // The asked coords not ok, set to stockholm as default
            latitude = 59.32553;
            longitude = 18.00659;
        }

        return WeatherSource.apiCall({longitude:longitude,latitude:latitude}).then(result=>{
            return gatherDataPoints(result.timeSeries)
        })
    }
}

export default WeatherSource;
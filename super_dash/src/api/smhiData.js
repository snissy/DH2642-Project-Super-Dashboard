import gatherDataPoints from "../api/dataProcessors/processWeatherDays"

const BASE_SMHI_URL = "https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/{longitude}/lat/{latitude}/data.json"

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
const SWAPI_ROOT_URL = "https://swapi.dev/api/{stat_type}/{number}/";

/*  
    -- Allowed stat_types : numbers -- 
    People: 82
    Planets: 60
    Films: 6
    Species : 37
    Vehicles: 39
    Starships: 36
*/

const SwapiSource={ 

    // This function makes the actual api call to SWAPI
    apiCall(props) {
        console.log(props.stat_type)
        console.log(props.number)
        
        let url_call = SWAPI_ROOT_URL.replace("{stat_type}", props.stat_type).replace("{number}", props.number);
        console.log(url_call)
        console.log("https://swapi.dev/api/people/1/")
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

    getSwapiDetails(type_parameter, number_parameter){
        // this function calls the apiCall and pass the asked type and number to the call.
        return SwapiSource.apiCall({stat_type:type_parameter,number:number_parameter})
    }

};

export default SwapiSource;
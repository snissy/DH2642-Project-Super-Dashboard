import BasicJsonApiCall from "./basicFetcher";

const SWAPI_ROOT_URL = "https://swapi.dev/api/{stat_type}/{number}/";
const ALLOWED_STAT_TYPES = ["people","planets","films","species","vehicles","starships"];
/*  
    -- stat_types : numbers -- 
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

        let url_call = SWAPI_ROOT_URL.replace("{stat_type}", props.stat_type).replace("{number}", props.number);

        // The actual fetch
        return BasicJsonApiCall({baseUrl:url_call});
    },

    getSwapiDetails(type_parameter, number_parameter){

        if (!(ALLOWED_STAT_TYPES.includes(type_parameter))){
            throw new Error("Swapi not called: Invalid stat type.")
        }

        if (number_parameter < 1)
            throw new Error("Swapi not called: Number must be above 0.")
        
        // this function calls the apiCall and pass the asked type and number to the call.
        return SwapiSource.apiCall({stat_type:type_parameter,number:number_parameter})
    }

};

export default SwapiSource;
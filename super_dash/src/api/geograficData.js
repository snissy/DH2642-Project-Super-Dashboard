import BasicJsonApiCall from "./basicFetcher";
const BASE_URL = "https://nominatim.openstreetmap.org/reverse?lat={lat}&lon={lon}&format=json&zoom=14"

const  GeographicNameSource ={

    apiCall(params) {

        // TODO I think this is a ugly solution. Does anybody know the if this is good ?
        let url_call = BASE_URL.replace("{lon}", params.longitude).replace("{lat}", params.latitude);

        // The actual fetch
        return BasicJsonApiCall({baseUrl:url_call});
    },

    getGeoName(longitude, latitude){
        return GeographicNameSource.apiCall({longitude:longitude, latitude:latitude}).then(result=>{return result})
    }
}

export default GeographicNameSource;
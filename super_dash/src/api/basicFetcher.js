function BasicJsonApiCall(params) {

    // The actual fetch
    return fetch(params.baseUrl, {
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
}

export default BasicJsonApiCall;
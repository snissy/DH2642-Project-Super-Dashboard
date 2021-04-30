import newsItems from "../newsFetch";

const BASE_NEWS_URL = "/news"

const  NewsSource={
    // This function makes the actual api call to smhi
    apiCall(params) {

        // The actual fetch
        return fetch(BASE_NEWS_URL, {
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

    getNewsItems(){
        return new Promise((resolve, reject)=>{console.log("Fetching newsItems");resolve();}).then(()=>{return newsItems})
        // return NewsSource.apiCall().then(result=>{return result}) TODO Super viktigt att fixa detta.
    }
}

export default NewsSource;
import BasicJsonApiCall from "./basicFetcher";

const BASE_QUOTE_URL = "/quotes?character={param1}&planet={param2}";

const  QuotesSource={

    apiCall(params) {
        
        // Add parameters to the URL and turn spaces into '+' before performing api call.
        let url_call = BASE_QUOTE_URL.replace("{param1}", params.character).replace("{param2}", params.planet).replaceAll(" ", "+");

        // The actual fetch
        return BasicJsonApiCall({baseUrl:url_call});
    },

    getRandomQuote(c,p){
        
        return QuotesSource.apiCall({character:c,planet:p}).then(result=>{return result})
    }
}

export default QuotesSource;
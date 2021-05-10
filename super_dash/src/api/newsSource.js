import BasicJsonApiCall from "./basicFetcher";

const BASE_NEWS_URL = "/news"

const  NewsSource={

    apiCall(params) {

        // The actual fetch
        return BasicJsonApiCall({baseUrl:BASE_NEWS_URL});
    },

    getNewsItems(){
        return NewsSource.apiCall().then(result=>{return result})
    }
}

export default NewsSource;
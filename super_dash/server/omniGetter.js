const axios  = require("axios").default;
const cheerio = require('cheerio');

function fetchNewsArticles(){
    // all nyhetsdata ligger i divar som har classen "teaser teaser--small "
    // TODO kanske placera detta i separat fil. Jo men det ska vi göra.
    // Structuren på detta är kankse inte helt hundra än.

    let omniRequest = axios.get('https://omni.se/senaste')
        .then(response => {
            // ok response
            if (response.status !== 200) {
                new Error("Could not get omni items")
            }
            return response.data
        })
        .catch(error => {
            console.log(error)
        })

    return omniRequest.then(rawHtml => {

        let newsItems = {articles: []};
        let $ = cheerio.load(rawHtml);

        $(".teaser").each((index, element) => {
            console.log($(element).text())

        })

        return newsItems

    }).catch(error => {
        console.log(error)
    })

}

module.exports = {
    fetchNewsArticles: fetchNewsArticles
};



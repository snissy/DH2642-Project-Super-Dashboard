const axios  = require("axios").default;
const cheerio = require('cheerio');

function fetchNewsArticles(){
    // TODO
    // all nyhetsdata ligger i divar som har classen "teaser teaser--small "
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
            let articleDiv = $(element)
            let articleImg = articleDiv.find("img")
            let article = {
                title:articleDiv.find(".resource--title").text(),
                text:articleDiv.find(".resource--text").text(),
                href:"https://omni.se"+articleDiv.find(".article-link").attr("href"),
                imgSrc:articleImg.attr("src"),
                imgTitle:articleImg.attr("title"),
            }
            newsItems.articles.push(article)
        })

        return newsItems

    }).catch(error => {
        console.log(error)
    })

}

module.exports = {
    fetchNewsArticles: fetchNewsArticles
};



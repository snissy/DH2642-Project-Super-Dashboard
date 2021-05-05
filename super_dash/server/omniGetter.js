const axios  = require("axios").default;
const cheerio = require('cheerio');

function fetchNewsArticles(){

    // Fetching the html data from omni
    let omniRequest = axios.get('https://omni.se/senaste')
        .then(response => {

            if (response.status !== 200) {
                // Couldn't receive omni html

                new Error("Could not get omni items")
            }
            // ok response
            return response.data
        })
        .catch(error => {
            // log error
            console.log(error)
        })

    // return a promise were we parse and scrap article items
    return omniRequest.then(rawHtml => {

        // Creating Json object to send.
        let newsItems = {articles: []};

        //Using Cheerio to scrape data
        let $ = cheerio.load(rawHtml);

        // Query cherrio that get the article items

        $(".group--single").not(".group--sponsored").each((index, element) => {
            // iterate of all newsItems

            //get the div tag that contain all data
            let articleDiv = $(element)

            let articleImg = articleDiv.find("img")

            // create article item.
            let article = {
                title:articleDiv.find(".resource--title").text(),
                text:articleDiv.find(".resource--text").text(),
                href:"https://omni.se"+articleDiv.find(".article-link").attr("href"),
                imgSrc:articleImg.attr("src"),
                imgTitle:articleImg.attr("title"),
            }
            if(article.title!==""){
                newsItems.articles.push(article)
            }
        })
        // sending newsitem
        return newsItems

    }).catch(error => {
        console.log(error)
    })

}

module.exports = {
    fetchNewsArticles: fetchNewsArticles
};



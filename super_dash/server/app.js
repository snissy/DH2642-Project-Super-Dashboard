const express = require("express")
const app = express()
const port = 5000
const axios  = require("axios").default;
const cheerio = require('cheerio');

// all nyhetsdata ligger i divar som har classen "teaser teaser--small "
function readNewHTMl(rawArticles){

    let newsItems = {articles:[]};

    rawArticles.forEach(element=>{

        let article = {}

    })


    return newsItems
}



app.get('/news',(req, res) =>{


    // TODO Detta måste förfinas. VIKTIGT
    console.log("I've received a request")

    axios.get('https://omni.se/senaste')
        .then(response =>{
            // ok response
            const $ = cheerio.load(response.data);
            const result = $(".teaser")
            console.log(result.toArray().map(element=>console.log($.html(element))))

        })
        .catch(error=>{
            console.log("Något gick knas")
            console.log(error)
        })
        .then(()=>{
            console.log("Hela get requested är klart")
        })


    res.json({message:"Hello Nils"})


})

app.listen(port, ()=>{
    console.log('Server is listening at http://localhost:' + port)
})




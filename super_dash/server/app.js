const express = require("express")
const app = express()
const port = 5000
const omniGetter = require('./omniGetter.js');

// Set server to listen too localhost:5000/news

app.get('/news',(req, res) =>{

    // Server recieved http request, fetch omni items
    let newsItems = omniGetter.fetchNewsArticles();
    newsItems.then(finalNewItems=>{

        // Sends json object with all newsItem
        res.json(finalNewItems)
        console.log("I've finalized news request, sending data\n#---------------------------#\n")
    })
    console.log("<--------------------------->\nI've received a news request")
})

app.listen(port, ()=>{
    console.log('Server is listening at http://localhost:' + port)
})




const express = require("express")
const app = express()
const port = 5000
const omniGetter = require('./omniGetter.js');

app.get('/news',(req, res) =>{

    let newsItems = omniGetter.fetchNewsArticles();
    newsItems.then(finalNewItems=>{
        res.json(finalNewItems)
        console.log("I've finalized news request, sending data\n#---------------------------#\n")
    })
    console.log("<--------------------------->\nI've received a news request")
})

app.listen(port, ()=>{
    console.log('Server is listening at http://localhost:' + port)
})




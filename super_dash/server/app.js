const express = require("express")
const app = express()
const port = process.env.PORT || 5000;
const omniGetter = require('./omniGetter.js');
const path = require("path");

const quotes = require("./quotes.js");



app.use(express.static(path.join(__dirname, '..', 'build')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname,  '..',  'build',  'index.html'));
});

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

app.get('/quotes', (req, res)=>{

    /* 
        Example Request: 
        /quotes?character=Han+Solo&planet=Hoth
    */

    // Calls getQuote(), passing the query parameters from request.
    let quote_as_string = quotes.getQuote(req.query.character, req.query.planet);
    let jsonQ = {quote: quote_as_string}
    res.json(jsonQ);

})

app.listen(port, '0.0.0.0',()=>{
    console.log('Server is listening at http://localhost:' + port)
})


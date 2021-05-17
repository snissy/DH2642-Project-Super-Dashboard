const express = require("express")
const app = express()
const port = process.env.PORT || 5000;
const omniGetter = require('./omniGetter.js');
const path = require("path");

const starWarsQ = require("./quotes.js");



app.use(express.static(path.join(__dirname, '..', 'build')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname,  '..',  'build',  'index.html'));
});

// Set server to listen too localhost:5000/news
app.get('npm ',(req, res) =>{

    // Server recieved http request, fetch omni items
    let newsItems = omniGetter.fetchNewsArticles();
    newsItems.then(finalNewItems=>{

        // Sends json object with all newsItem
        res.json(finalNewItems)
        console.log("I've finalized news request, sending data\n#---------------------------#\n")
    })
    console.log("<--------------------------->\nI've received a news request")
})

app.get('/starwars', (req, res)=>{

    res.json(starWarsQ.data);

})

app.listen(port, '0.0.0.0',()=>{
    console.log('Server is listening at http://localhost:' + port)
})




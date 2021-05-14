const express = require("express")
const app = express()
const port = process.env.PORT || 5000;
const omniGetter = require('./omniGetter.js');
const path = require("path");



/*/
To serve static files such as images, CSS files, and JavaScript files, use the express.static built-in middleware function in Express.

The function signature is:

express.static(root, [options])

The root argument specifies the root directory from which to serve static assets. For more information on the options argument, see express.static.

For example, use the following code to serve images, CSS files, and JavaScript files in a directory named public:

app.use(express.static('public'))

Now, you can load the files that are in the public directory:

http://localhost:3000/images/kitten.jpg
http://localhost:3000/css/style.css
http://localhost:3000/js/app.js
http://localhost:3000/images/bg.png
http://localhost:3000/hello.html

 */
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

app.listen(port, ()=>{
    console.log('Server is listening at http://localhost:' + port)
})




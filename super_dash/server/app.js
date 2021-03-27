const express = require("express")
const app = express()
const port = 5000

app.get('/news',(req, res) =>{

    console.log("I've received a request")
    res.json({message:"Hello Nils"})
})

app.listen(port, ()=>{
    console.log('Server is listening at http://localhost:' + port)
})




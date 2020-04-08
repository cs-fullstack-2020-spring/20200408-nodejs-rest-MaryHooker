//Node & Express Rapid Fire

//Reference express module
let express = require('express');

//Create server using express method and save under app
let app = express();



//Create listener for server under port 7000
app.listen(7000, ()=>{
    console.log('Listening on port 7000')
})

//Route with a dynamic name
app.get('/greeting/:name',(req,res)=>{
    res.send(`Hello there ${req.params.name}!`)
})
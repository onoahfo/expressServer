// requiring package and storing it in express variable
const express = require('express');
//calling express and storing its value in a variable
const app = express();

// routing any traffic going to the root url and sending back a response
app.get('/', function(request, response){
    response.send("Landing page!!");
});

// routing any traffic that going to /regiion and sending back a responce
app.get('/region', function(req, res){
    res.send("your in my territory lil dawg")
});

//app is listening for request on port 3000
app.listen(3000);


console.log("Server is live and on port 3000.....");




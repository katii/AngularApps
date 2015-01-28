var express = require('express');
var path = require('path');
var user = require('./user');

var app = express();

// this function is executed for every request
// here could check e.g. is user/session correct for request
app.use(function(req,res,next){
    console.log(req.method);
    // tässä välissä vois liittää tietokannan, johon sitten suorittaa kyselyjä
    // req.db = db;
    console.log(req.path);
    next();
});

// middleware for user data
app.use('/data', user);

// use static files from public folder
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000);
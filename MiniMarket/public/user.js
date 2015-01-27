var express = require('express');

var router = express.Route();

router.get(function(req,res){
    var dummy = [{name:'maito',price:'1,75 €'},{name:'coffee',price:'3,45 €'}];
    
    res.send(dummy);
});

router.post(function(req,res){
});
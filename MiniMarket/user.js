var express = require('express');

var router = express.Router();

router.get('/',function(req,res){
    var dummy = [{name:'maito',price:'1,75 €'},{name:'kahvi',price:'3,45 €'}];
    
    res.send(dummy);
});

router.post('/',function(req,res){
});

router.put('/',function(req,res){
});

router.delete('/',function(req,res){
});

module.exports = router;
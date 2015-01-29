var express = require('express');

var router = express.Router();

var dummy = [/*{name:'maito',price:'1,75 €'},{name:'kahvi',price:'3,45 €'}*/];
    
router.get('/',function(req,res){
    
    res.send(dummy);
});

router.post('/',function(req,res){
    
    dummy.push(req.body);
    res.send('Added to server array');
    
});

router.put('/',function(req,res){
    // jottain tarttis täälläkin tehrä...
});

router.delete('/',function(req,res){
    
    dummy.splice(req.query.id,1);
    res.send("We are ok");
});

module.exports = router;
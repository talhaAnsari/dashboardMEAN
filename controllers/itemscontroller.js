const express = require('express');
const mongoose = require('mongoose');
const Items = mongoose.model('items');

var router = express.Router();

router.get('/',(req,res)=>{
    res.render("items/addOrEdit",{
        viewTitle: "Insert Items"
    });
});

router.post('/',(req,res)=>{
    insertRecord(req,res);
    });

function insertRecord(req,res){
    var items =new Items();

    items.ItemName=req.body.ItemName;
    items.Description=req.body.Description;
    items.Price=req.body.Price;
    items.Counter=req.body.Counter;

    items.save((err,doc)=>{
        if(!err)
            res.redirect('items/list');
        else{
            console.log('error while insertion :'+ err);
        }
    });
}

router.get('/list',(req,res)=>{
    Items.find((err,docs)=>{
        if(!err){
            res.render("items/list",{
                list: docs
            });
        }
        else{
            console.log('Error while retrieving the data: '+err);
        }
    });
    
});

module.exports = router;
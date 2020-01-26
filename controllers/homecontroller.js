const express = require('express');
const mongoose = require('mongoose');
const home = mongoose.model('home');

var router = express.Router();

router.get('/',(req,res)=>{
    home.find((err,docs)=>{
        if(!err){
            res.render("homeLayout/home",{
                list: docs
            });
        }
        else{
            console.log('Error while retrieving the data: '+err);
        }
    });
    
});

router.post('/',(req,res)=>{
    insertRecord(req,res);
    });

function insertRecord(req,res){
    var homes =new home();

    homes.Source=req.body.Source;
    homes.Number_Of_Orders=req.body.NumberOfOrders;
    homes.Amount=req.body.Amount;

    homes.save((err,doc)=>{
        if(!err)
            res.redirect('/');
        else{
            console.log('error while insertion :'+ err);
        }
    });
}

module.exports = router;
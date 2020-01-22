const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/dashboard',{useNewUrlParser : true},(err)=>{
    if(!err) {Console.log('Mongodb Connection Success')}
    else {Console.log('Mongodb Connection Failed'+err)}

});

require('./items.model');
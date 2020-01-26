const mongoose = require('mongoose');

var homeSchema= new mongoose.Schema({
    Source: {
        type : String
    },
    Number_Of_Orders: {
        type : Number
    },
    Amount: {
        type : Number
    },
});

mongoose.model('home', homeSchema);
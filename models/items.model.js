const mongoose = require('mongoose');

var itemSchema= new mongoose.Schema({
    ItemName: {
        type : String
    },
    Description: {
        type : String
    },
    Price: {
        type : Number
    },
    Counter: {
        type : Number
    },
});

mongoose.model('items',itemSchema);
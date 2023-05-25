const mongoose = require("mongoose");
//user schema
const Employee =  mongoose.model('Employee',{
    name :String,
    email:String,
    mobno:String,
   
});

module.exports = { Employee }

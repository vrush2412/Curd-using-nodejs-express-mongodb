const express=require("express");
 const mongoose=require("mongoose");
const bodyParser= require('body-parser');

 const app=express();
//  mongoose.set('strictQuery', false);
app.use(bodyParser.json());

 mongoose.connect("mongodb://localhost:27017/crud",{

 useNewUrlParser:true,
 useUnifiedTopology:true

}, (err)=>{

if (err){
console.log(err)
}

else{
    console.log("successfully connected")
}
})

app.get('/',(req,res) =>{
    res.send("hello world");
 });


app.listen(3009,()=>{
    console.log("Running on port 3009!!!")
})

app.use('/', require('./routes/index'));

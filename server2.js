const express=require("express");

const mongoose =require("mongoose");

const app=express();



mongoose.connect("mongodb://127.0.0.1:27017/RedBeast", { useNewUrlParser: true, useUnifiedTopology: true });


const userSchema= new mongoose.Schema({
    hero1:String,
    hero2:String
});


const userModel=mongoose.model('user',userSchema);


app.get("/",(req,res)=>{
    userModel.find({}).then(function(users){
            res.json(users)
    }).catch(function(err){
        console.error("err");
        res.status(500).send("Interval server error");
    })
});


const newUser= new userModel({
    name:"dali",
    motto:"hard work always pays off"
});


newUser.save().then(savedUser =>{
    console.log("user saved successfully",savedUser)
})
.catch(err=>{
    console.error("error saving user",err);
})

app.listen(3000)



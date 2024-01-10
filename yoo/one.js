    const express  =require("express");
    const mongoose=require("mongoose");

    const app=express();

    mongoose.connect("mongodb+srv://mightguy911:mightguy911@cluster0.caeyxcu.mongodb.net/Cluster0", { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log("Connected to MongoDB Atlas");
})
.catch((err) => {
    console.error("Error connecting to MongoDB Atlas:", err);
})



    const  userSchema=mongoose.Schema({
        name:String,
        lastName:String,
        addresse:String,
        codePostal:String,
        pays:String,
    })

    const userModel = mongoose.model("users",userSchema)
    app.get("/getData", (req,res)=>{
        userModel.find({}).then(function(users){
            res.json(users)
        }).catch(function(err){
            console.log(err)
        })
    })

    app.listen(3001,()=>  {
        console.log("server is running");
    })
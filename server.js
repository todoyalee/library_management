var http= require("http") ;
var fs =require("fs") ;
const express =require("express") ;
var app =express() ;
const body_parser=require("body-parser") ;
const mongoose =require("mongoose") ;
//mongoose.connect("mongodb+srv://mightguy911:mightguy911@cluster0.caeyxcu.mongodb.net/Cluster0");

//mongoose.connect('mongodb+srv://mightguy911:mightguy911@belkouri.ehhekmj.mongodb.net/montaha'),
mongoose.connect("mongodb+srv://mightguy911:mightguy911@cluster0.caeyxcu.mongodb.net/Cluster0", { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log("Connected to MongoDB Atlas");
})
.catch((err) => {
    console.error("Error connecting to MongoDB Atlas:", err);
})

// "mongodb+srv://belkouri.ehhekmj.mongodb.net/" --apiVersion 1 --username mightguy911
app.use(body_parser.urlencoded({extended:true})) ;
 server = http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'}) ;
fs.createReadStream(__dirname+'/index.html').pipe(res) ;
})

const  notesSchema={
        name:String,
        lastName:String,
        addresse:String,
        codePostal:String,
        pays:String,
}
const note = mongoose.model("note",notesSchema)
app.get("/",function(req,res){
    res.sendFile(__dirname+'/index.html') ;
})

//app.post request
app.post("/",function(req,res){
    let newNote = new note({
        name:req.body.userName ,
        lastName:req.body.userLName ,
        addresse:req.body.userAddress ,
        codePostal:req.body.userCP ,
        pays:req.body.userPays ,
    }) ;
    

    app.get("/dataa", (req,res)=>{
        note.find({}).then(function(notes){
            res.json(note)
        }).catch(function(err){
            console.log(err)
        })
    })
    newNote.save();
    res.redirect("/") ;

})


app.listen(3008,"127.0.0.8");
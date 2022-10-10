var http= require("http") ;
var fs =require("fs") ;
const express =require("express") ;
var app =express() ;
const body_parser=require("body-parser") ;
const mongoose =require("mongoose") ;
mongoose.connect("mongodb+srv://mightguy911:mightguy911@cluster0.caeyxcu.mongodb.net/Cluster0");
app.use(body_parser.urlencoded({extended:true})) ;
 server = http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'}) ;
fs.createReadStream(__dirname+'/index.html').pipe(res) ;
})

const  notesSchema={
    title:String,
    content:String
}
const note = mongoose.model("note",notesSchema)
app.get("/",function(req,res){
    res.sendFile(__dirname+'/index.html') ;
})
//app.post request
app.post("/",function(req,res){
    let newNote = new note({
        title:req.body.userName ,
        content: req.body.booksName
    }) ;
    newNote.save();
    res.redirect("/") ;

})


app.listen(3008,"127.0.0.8");
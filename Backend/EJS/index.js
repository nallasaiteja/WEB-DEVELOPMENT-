const express = require("express");
const app = express();
const path = require("path");
let port = 8080;

app.use(express.static(path.join(__dirname,"public")));
app.set("views",path.join(__dirname,"/views"));

app.set("view engine","ejs");
app.listen(port,()=>{
    console.log("started");
})



app.get("/",(req,res)=>{
    res.render("home.ejs");
});

app.get("/ig/:username",(req,res)=>{
    let {username} = req.params;
    const data = require("./data.json");
    res.render("instagram.ejs",{data : data[username]});
})

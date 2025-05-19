const express = require("express");
const app = express();

let port = 3000;

app.listen(port,()=>{
    console.log("app is getting started");
})

/*app.use((req,res)=>{
    console.log("request received");
    res.send("My first response");
})*/

app.get("/",(req,res)=>{
    res.send("IN HOME PAGE");
});

app.get("/apple",(req,res)=>{
    res.send("IN APPLE  PAGE");
});

app.get("/mango",(req,res)=>{
    res.send("IN MANGO PAGE");
});
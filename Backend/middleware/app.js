const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");

/*app.use((req,res,next)=>{
    console.log("Hi,I am a Middleware");
    
    next();
})

app.get("/",(req,res)=>{
    res.send("Hii,I am a root");
})
*/

//logger information
/*app.use((req,res,next)=>{
    req.time = new Date(Date.now()).toString();
    console.log(req.method,req.hostname,req.path,req.time);
    
    next();
})*/

const checkToken = (req,res,next)=>{
    let {token} = req.query;
    if (token === "giveaccess"){
        next();
    }
    throw new ExpressError(401,"ACCESS DENIED");
};

//activity
app.get("/admin",(req,res)=>{
    throw new ExpressError(403,"Access is Forbidden");
})

app.get("/api",checkToken,(req,res)=>{
    res.send("data");
})

app.get("/err",(req,res)=>{
    abcd = abcd;
})

app.use((err,req,res,next)=>{
     let {status,message} = err;
     res.status(status).send(message);
     
})



app.use("/path",(req,res,next)=>{
    console.log("I am in a path route");
})

app.get("/random",(req,res)=>{
    res.send("Hii,This is a random page");
})

app.listen(8080,()=>{
    console.log("server listening to port 8080");
})
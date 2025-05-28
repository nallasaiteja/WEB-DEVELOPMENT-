const { faker } = require('@faker-js/faker');
const mysql = require("mysql2");
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended : true}));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

const connection = mysql.createConnection({
    host:'localhost',
    user:"root",
    database:"delta_app",
    password:"@mysql1234S"
});

let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(), // before version 9.1.0, use userName()
    faker.internet.email(),
    faker.internet.password(),
    
  ];
}

app.get("/",(req,res)=>{
    
    let q = "SELECT count(*) FROM user";
    try{
        connection.query(q,(err,result)=>{
            if(err) throw err;
            console.log(result);
            let c = result[0]["count(*)"];
            res.render("home.ejs",{c});
        })
    }
    catch(err){
             console.log(err);
             res.send("Error occured in database");
    }
});

app.get("/user",(req,res)=>{
    try{
        let q = `Select * from user`;
        connection.query(q,(err,result)=>{
            if(err) throw err;
            
            
            res.render("showusers.ejs",{result});
        })
    }
    catch(err){
             console.log(err);
             res.send("Error occured in database");
    }
});

//Edit route
app.get("/user/:id/edit",(req,res)=>{
    let {id} = req.params;
    let q = `Select * from user where id='${id}'`;
    try{
        
        connection.query(q,(err,result)=>{
            if(err) throw err;
            let user = result[0]; // we are getting data in the form of array
            
            res.render("edit.ejs",{user});
            
        })
    }
    catch(err){
             console.log(err);
             res.send("Error occured in database");
    }
    
});

//update route
app.patch("/user/:id",(req,res)=>{
     let {id} = req.params;
     let {formpass,newuser} = req.body;
     let q = `Select * from user where id='${id}'`;
    try{
        
        connection.query(q,(err,result)=>{
            if(err) throw err;
            let user = result[0]; // we are getting data in the form of array
            
            if(formpass != user.password){
                res.send("WRONG PASSWORD");
            }
            else{
                let q2 = `update user set username='${newuser}' where id='${id}'`;
                connection.query(q2,(err,result)=>{
                    if (err) throw err;
                    res.redirect("/user");
                
                })
            
                
            }
        })
    }
    catch(err){
             console.log(err);
             res.send("Error occured in database");
    }
})

app.listen(8080,()=>{
    console.log("server started");
});


/*try{
    connection.query(q,[data],(err,result)=>{
        if(err) throw err;
        console.log(result);
    });
}
catch(err){
    console.log(error);
}

connection.end();*/








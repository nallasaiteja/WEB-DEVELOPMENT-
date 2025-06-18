const express = require("express");
const app = express();
const mongoose=require("mongoose");
const path = require("path");
const Chat = require("./models/chat");
const methodOverride = require('method-override');

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));





main().then(()=>{
    console.log("connection successful");
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

  
}

app.get("/chats",async (req,res)=>{
  let chats = await Chat.find();  //it returns a promise
  console.log(chats);
  res.render("index.ejs",{chats});
})

// A route to create a new chat
app.get("/chats/new",(req,res)=>{
    res.render("new.ejs");
})


//Create Route
app.post("/chats",(req,res)=>{
  
  let {from,message,to} = req.body
  let newChat = new Chat({
    from : from,
    to : to,
    message : message,
    created_at: new Date()
  })
  console.log(newChat);
  newChat.save().then((res)=>{
    console.log("chat was saved");
  })
  .catch((err)=>{
    console.log(err);
  })
  res.redirect("/chats");
});


//to deliever a edit form
app.get("/chats/:id/edit",async (req,res)=>{
  let {id} = req.params;
  let chat = await Chat.findById(id);
  res.render("edit.ejs",{chat});
});

//update route 
app.put("/chats/:id",async (req,res)=>{
  let { id } = req.params;
  let { message } = req.body;
  let updatedchat =await Chat.findByIdAndUpdate(id,{message : message});
  res.redirect("/chats");
})

app.listen(8080,()=>{
    console.log("started server");
})
const mongoose = require("mongoose");
const Chat = require("./models/chat");




main().then(()=>{
    console.log("connection successful");
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

  
}


let allChats = [
    {
    from: "neha",
    to: "priya",
    message: "results are declared",
    created_at: new Date()
  },
  {
    from: "rahul",
    to: "anita",
    message: "class is canceled today",
    created_at: new Date()
  },
  {
    from: "teacher",
    to: "students",
    message: "submit your assignments by Friday",
    created_at: new Date()
  },
  {
    from: "admin",
    to: "all",
    message: "server maintenance scheduled at 10 PM",
    created_at: new Date()
  },
  {
    from: "priya",
    to: "neha",
    message: "thanks for the update!",
    created_at: new Date()
  },
  {
    from: "arjun",
    to: "rahul",
    message: "can you share today's notes?",
    created_at: new Date()
  },
  {
    from: "system",
    to: "user123",
    message: "your password has been changed successfully",
    created_at: new Date()
  }
];

Chat.insertMany(allChats);
const mongoose = require("mongoose");


main()
.then((res)=>{console.log("connection successfull");})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

 
}

const schema = new mongoose.Schema({
   name :String,
   email :String,
   age : Number,
});

const User = mongoose.model("User",schema);

/*const user1 = new User({name:"sai",email:"nalla@gmail.com",age:20});

User.insertMany([
    {
        name:"rahul",
        email:"rahul@gmail",
        age:20
    },
    {
        name:"rgv",
        email:"rgv@gmail.com",
        age:25
    }
])

user1.save(); //saved to database*/

User.find({age:{$gt : 25}}).then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
});

User.updateOne({age : {$gt :10}}, {age : 30}).then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
});

User.updateMany({age : {$gt :10}}, {age : 45}).then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
});
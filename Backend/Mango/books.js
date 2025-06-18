const mongoose = require("mongoose");


main()
.then((res)=>{console.log("connection successfull");})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

const schema = new mongoose.Schema({
    title : {
        type:String,
        required :true,
        maxLength :20,
    },
    author : {
        type:String,
    },
    price : {
        type:Number,
        min : [1,"Price is too low for amzon selling"],
    },
    category :{
        type :String,
        enum : ["Fictional","Non Fictional"],
    },
    genre : [String],

});

const Book = mongoose.model("Book",schema); 

const Book1 = new Book({
    title : "mathematics",
    author:"RD SHARMA",
    price : 500,
    category : "Fictional",
    genre : ["fiction","emotion"],
});

Book1.save().then((res)=>{
    console.log(res);
})
.catch((err)=>{
  console.log(err);
});
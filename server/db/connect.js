const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://karandhole:karan123@cluster0.1ui2q.mongodb.net/"


const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo Successfully");
    })
}
module.exports = connectToMongo;


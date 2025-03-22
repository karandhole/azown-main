const mongoose = require('mongoose');
const { Schema } = mongoose;
const JWT_SECRET = "shaneisgoodboy";
const jwt = require("jsonwebtoken");
require('dotenv').config();                                                                             

const AdminSchema = new Schema({
    email:{
        type: String,     
    },
    password:{
        type: String,
    } 
  },
  { timestamps: true} 
  
  );

 


  const Admin = mongoose.model('admin', AdminSchema);
  module.exports = Admin;
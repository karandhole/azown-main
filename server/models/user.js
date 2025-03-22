const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    phone:{
        type:String,
        unique: true
    },
    dob:{
        type:String
    },
    password:{
        type: String,
        required: true
    },
    usertype:{
        type:String,
        default:0
    },
    img_url:{
        type:String
    },
    description:{
        type:String
    },
    is_active:{
        type:Boolean,
        default:true
    },
    facebook_link:{
        type:String
    },
    twitter_link:{
        type:String
    },
    instagram_link:{
        type:String
    },
    linkedin_link:{
        type:String
    },
    primium:{
        type:Boolean,
        default:false
    },
    kyc_status:{
        type:Number,
        default:0
    },
    primium_expiry_date:{
        type:Date ,
        default:Date.now
    },


  }, { timestamps: true });
  const User = mongoose.model('user', UserSchema);
  module.exports = User;
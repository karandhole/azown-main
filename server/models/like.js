const mongoose = require('mongoose');
const { Schema } = mongoose;

const LikeSchema = new Schema({
    property_id:{
        type:String
    },
    property_type:{
    type:Number
    },
    client_id:{
        type:String
    },   
    property_lead_open_date:{
        type: Date,
        default: Date.now
    },

  });
  const Like = mongoose.model('like', LikeSchema);
  module.exports = Like;
const mongoose = require('mongoose');
const { Schema } = mongoose;

const HandlerSchema = new Schema({
    property_id:{
        type:String
    },
    property_type:{
        type:Number
    },
    owner_id:{
        type:String
    },
    broker_id :{
        type:String,
    },  
    stage:{
        type:Number,
        default:0
    }

  }, { timestamps: true } 
  
  );
  const handler = mongoose.model('handler', HandlerSchema);
  module.exports = handler;
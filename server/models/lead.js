const mongoose = require('mongoose');
const { Schema } = mongoose;

const LeadSchema = new Schema({
    property_id:{
        type:String
    },
    property_type:{
    type:Number
    },
    property_lead_client_id:{
        type:String
    },
    property_lead_owner_id :{
        type:String,
    },
    property_lead_handler_id:{
        type:String
    },
    property_lead_stage:{
        type:Number
    },
    property_lead_transaction_id :{
        type:String
    },
    property_lead_open_date:{
        type: Date,
        default: Date.now
    },
    property_lead_closure_date:{
        type:Date
    }

  });
  const Lead = mongoose.model('lead', LeadSchema);
  module.exports = Lead;
const mongoose = require('mongoose');
const { Schema } = mongoose;

const service_leadSchema = new Schema({
    service_id:{
        type:String
    },
    client_id:{
        type:String
    },
    vender_id:{
        type:String
    },
    lead_stage:{
        type:Number,
        default: 0
    },
    lead_review:{
        type:[{
            review:{
                type:String

            },
            rating:{
                type:Number
            },
            review_by:{
                type:String
            }
        }]
    },
   
    
  }, { timestamps: true});
  const service_lead = mongoose.model('service_lead', service_leadSchema);
  module.exports = service_lead;
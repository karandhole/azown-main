const mongoose = require('mongoose');
const { Schema } = mongoose;

const vender_kycSchema = new Schema({
    vender_id:{
        type:String
    },
    vender_aadhar:{
        type:String
    },
    vender_pan:{
        type:String
    },
    vender_gst:{
        type:String
    },
  
}, { timestamps: true });
const vender_kyc = mongoose.model('vender_kyc', vender_kycSchema);

const broker_kycSchema = new Schema({
    broker_id:{
        type:String
    },
    broker_aadhar:{
        type:String
    },
    broker_pan:{
        type:String
    },
    broker_gst:{
        type:String
    },

}, { timestamps: true });
const broker_kyc = mongoose.model('broker_kyc', broker_kycSchema);

const builder_kycSchema = new Schema({
    builder_id:{
        type:String
    },
    builder_aadhar:{
        type:String
    },
    builder_pan:{
        type:String
    },
    builder_gst:{
        type:String
    },
}, { timestamps: true });
const builder_kyc = mongoose.model('builder_kyc', builder_kycSchema);

const owner_kycSchema = new Schema({
    owner_id:{
        type:String
    },
    owner_aadhar:{
        type:String
    },
    owner_pan:{
        type:String
    },
    owner_gst:{
        type:String
    },
}, { timestamps: true });
const owner_kyc = mongoose.model('owner_kyc', owner_kycSchema);

module.exports =  {  vender_kyc  ,   broker_kyc  ,owner_kyc , builder_kyc };
    

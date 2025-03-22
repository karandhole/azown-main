const mongoose = require("mongoose");
const { Schema } = mongoose;

const vender_serviceSchema = new Schema({
  vender_id: {
    type: String,
  },
  service_id: {
    type: String,
  },
  service_leads: {
    type: Array,
   
  },
  service_name: {
    type: String,
  },
  sub_service_name: {
    type: String,
  },
  service_charge: {
    type: String,
  },
  charge_unit: {
    type: String,
  },
  service_description: {
    type: String,
  },
}, { timestamps: true }, 
);
const vender_service = mongoose.model("vender_service", vender_serviceSchema);
module.exports = vender_service;

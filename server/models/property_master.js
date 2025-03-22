const mongoose = require("mongoose");
const property_master_Schema = mongoose.Schema({
  property_id: {
    type: String,
  },
  property_user_id: {
    type:String
    // type: mongoose.Schema.Types.ObjectId,
    // ref: 'user'
  },
  property_handler_id: {
    type: String,
  },
  property_posted_date: {
    type: Date,
    default : Date.now
  },
  property_is_active: {
    type: Boolean,
    default: true,
  },
  property_post_type: {
    type: String,
  },
  property_total_views: {
    type: Number,
  },
  property_upgraded_view_end_date: {
    type: String,
  },
});
const Property_Master = new mongoose.model(
  "Property_Master",
  property_master_Schema
);
module.exports = Property_Master;

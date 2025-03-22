const mongoose = require("mongoose");
const { Schema } = mongoose;

const ServiceSchema = new Schema(
  {
    service_name: {
      type: String,
    },
    service_description: {
      type: String,
    },
    service_image: {
      type: String,
    },
    service_is_active: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);
const Service = mongoose.model("Service", ServiceSchema);
module.exports = Service;

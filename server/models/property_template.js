const mongoose = require("mongoose");
const property_template_Schema = mongoose.Schema({
    property_id: {
        type: String,
    },
    property_template_data: {
        type: String,
    },   

}, { timestamps: true });
const property_template = mongoose.model("property_template", property_template_Schema);
module.exports = property_template;
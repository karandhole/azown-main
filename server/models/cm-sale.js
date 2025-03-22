const mongoose = require('mongoose');
const { Schema } = mongoose;

const cms_PropSchema = new Schema({
    userid: {
        type: String
    },
    handlerid: {
        type: String
    },
    is_active: {
        type: Boolean,
        default: true
    },
    like: {
        type: []
    },
    lead: {
        type: []
    },
    handlerIds: {
        type: []
    },


    cs_detail_description: {
        type: String
    },
    cs_detail_title: {
        type: String
    },
    cs_detail_property_type: {
        type: String
    },
    cs_detail_building_type: {
        type: String
    },
    cs_detail_prop_age: {
        type: String
    },
    cs_detail_floor: {
        type: String
    },
    cs_detail_total_floor: {
        type: String
    },
    cs_detail_builtup_area: {
        type: String
    },
    cs_detail_furnishing: {
        type: String
    },

    cs_location_state: {
        type: String
    },
    cs_location_city: {
        type: String
    },
    cs_location_latitiude: {
        type: String
    },
    cs_location_longitude: {
        type: String
    },
    cs_location_iframe: {
        type: String
    },

    cs_resale_details_exp_price: {
        type: String
    },
    cs_resale_details_maintenance: {
        type: String
    },
    cs_resale_details_available_from: {
        type: String
    },

    cs_amenities_power_backup: {
        type: Boolean
    },
    cs_amenities_lift: {
        type: Boolean
    },
    cs_amenities_parking: {
        type: Boolean
    },
    cs_amenities_washroom: {
        type: Boolean
    },
    cs_amenities_water_storage: {
        type: Boolean
    },
    cs_amenities_security: {
        type: Boolean
    },
    cs_amenities_wifi: {
        type: Boolean
    },



    images: {
        type: []
    },
    date: {
        type: Date,
        default: Date.now
    },
    primium_expiry_date:{
        type:Date ,
        default:Date.now
    },
});

module.exports = mongoose.model('cms_prop', cms_PropSchema);
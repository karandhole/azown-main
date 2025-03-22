const mongoose = require('mongoose');
const { Schema } = mongoose;

const rpg_PropSchema = new Schema({
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
    rpg_detail_title: {
        type: String
    },
    rpg_detail_description: {
        type: String
    },
    rpg_detail_room_occupany: {
        type: String
    },
    rpg_detail_room_rent: {
        type: String
    },
    rpg_detail_room_deposit: {
        type: String
    },
    rpg_detail_availablefor: {
        type: String
    },
    rpg_detail_pref_guest: {
        type: String
    },
    rpg_detail_available_from: {
        type: String
    },
    rpg_detail_food_included: {
        type: String
    },
    rpg_detail_gate_shut_time: {
        type: String
    },
    rpg_detail_parking: {
        type: String
    },

    rpg_rules_no_smoking: {
        type: Boolean
    },
    rpg_rules_no_guardian_stay: {
        type: Boolean
    },
    rpg_rules_no_girls_entry: {
        type: Boolean
    },
    rpg_rules_no_drinking: {
        type: Boolean
    },
    rpg_rules_no_non_veg: {
        type: Boolean
    },

    rpg_location_state: {
        type: String
    },
    rpg_location_city: {
        type: String
    },
    rpg_location_latitiude: {
        type: String
    },
    rpg_location_longitude: {
        type: String
    },
    rpg_location_iframe: {
        type: String
    },

    rpg_amenities_cupboard: {
        type: Boolean
    },
    rpg_amenities_tv: {
        type: Boolean
    },
    rpg_amenities_bed: {
        type: Boolean
    },
    rpg_amenities_geyser: {
        type: Boolean
    },
    rpg_amenities_ac: {
        type: Boolean
    },
    rpg_amenities_attached_bathroom: {
        type: Boolean
    },
    rpg_amenities_laundry: {
        type: Boolean
    },
    rpg_amenities_room_cleaning: {
        type: Boolean
    },
    rpg_amenities_warden_facility: {
        type: Boolean
    },
    rpg_amenities_common_tv: {
        type: Boolean
    },
    rpg_amenities_lift: {
        type: Boolean
    },
    rpg_amenities_wifi: {
        type: Boolean
    },
    rpg_amenities_power_backup: {
        type: Boolean
    },
    rpg_amenities_mess: {
        type: Boolean
    },
    rpg_amenities_fridge: {
        type: Boolean
    },
    rpg_amenities_mess_cooking: {
        type: Boolean
    },

    images: {
        type: []
    },
    primium_expiry_date:{
        type:Date ,
        default:Date.now
    },
});

module.exports = mongoose.model('rpg_prop', rpg_PropSchema);
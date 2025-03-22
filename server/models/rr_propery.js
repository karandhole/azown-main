const mongoose = require('mongoose');
const { Schema } = mongoose;

const rr_PropSchema = new Schema({
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
  rr_property_id: {
    type: String
  },
  rr_detail_description: {
    type: String
  },
  rr_detail_title: {
    type: String
  },
  rr_detail_app_type: {
    type: String
  },
  rr_detail_bhk_type: {
    type: String
  },
  rr_detail_floor: {
    type: String
  },
  rr_detail_total_floor: {
    type: String
  },
  rr_detail_floor_type: {
    type: String
  },
  rr_detail_kitchen_type: {
    type: String
  },
  rr_detail_prop_age: {
    type: String
  },
  rr_detail_facing: {
    type: String
  },
  rr_detail_builtup_area: {
    type: String
  },
  rr_detail_carpet_area: {
    type: String
  },
  rr_detail_furnishing: {
    type: String
  },
  rr_detail_parking: {
    type: String
  },
  rr_detail_bathroom: {
    type: String
  },
  rr_detail_balcony: {
    type: String
  },
  rr_detail_water_supply: {
    type: String
  },
  rr_location_state: {
    type: String
  },
  rr_location_city: {
    type: String
  },
  rr_location_latitude: {
    type: String
  },
  rr_location_longitude: {
    type: String
  },
  rr_location_iframe: {
    type: String
  },
  rr_rental_detail_rent: {
    type: String
  },
  rr_rental_detail_exp_deposit: {
    type: String
  },
  rr_rental_detail_is_nogotiable: {
    type: String
  },
  rr_rental_detail_monthly_maintenance: {
    type: String
  },
  rr_rental_detail_avail_from: {
    type: String
  },
  rr_rental_detail_pref_tenent: {
    type: String
  },
  rr_rental_detail_is_allowed_nonveg: {
    type: String
  },
  rr_rental_detail_shown_by: {
    type: String
  },
  rr_rental_detail_shown_by_number: {
    type: String
  },
  rr_amenities_lift: {
    type: Boolean
  },
  rr_amenities_ac: {
    type: Boolean
  },
  rr_amenities_intercom: {
    type: Boolean
  },
  rr_amenities_children_play_area: {
    type: Boolean
  },
  rr_amenities_servant_room: {
    type: Boolean
  },
  rr_amenities_gas_pipeline: {
    type: Boolean
  },
  rr_amenities_rainwater_harvesting: {
    type: Boolean
  },
  rr_amenities_housekeepiing: {
    type: Boolean
  },
  rr_amenities_visitor_parking: {
    type: Boolean
  },
  rr_amenities_internet: {
    type: Boolean
  },
  rr_amenities_club_house: {
    type: Boolean
  },
  rr_amenities_swimming_pool: {
    type: Boolean
  },
  rr_amenities_fire_safety: {
    type: Boolean
  },
  rr_amenities_shopping_center: {
    type: Boolean
  },
  rr_amenities_park: {
    type: Boolean
  },
  rr_amenities_sewage_treatment: {
    type: Boolean
  },
  rr_amenities_power_backup: {
    type: Boolean
  },
  rr_amenities_gated_security: {
    type: Boolean
  },
  rr_amenities_gym: {
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

module.exports = mongoose.model('rr_prop', rr_PropSchema);
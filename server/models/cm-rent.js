const mongoose = require('mongoose');
const { Schema } = mongoose;

const cmr_PropSchema = new Schema({
    userid:{
        type:String
    },
    handlerid:{
        type:String
    },
    is_active:{
      type:Boolean,
      default:true
    },
    like:{
        type:[]
    },
    lead:{
        type:[]
    },
    handlerIds:{
      type:[]
    },
    cr_detail_description: {
        type:String
    },
    cr_detail_title: {
        type:String
    },
    cr_detail_property_type  : {
        type:String
    },
    cr_detail_building_type: {
        type:String
    },
    cr_detail_prop_age : {
        type:String
    },
    cr_detail_floor : {
        type:String
    },
    cr_detail_total_floor : {
        type:String
    },
    cr_detail_builtup_area : {
        type:String
    },
    cr_detail_furnishing: {
        type:String
    },
    
    cr_location_state: {
        type:String
    },
    cr_location_city: {
        type:String
    },
    cr_location_latitiude: {
        type:String
    },
    cr_location_longitude: {
        type:String
    },
    cr_location_iframe: {
        type:String
    },
    
    cr_rental_detail_rent : {
        type:String
    },
    cr_rental_detail_exp_deposit: {
        type:String
    },
    cr_rental_detail_is_nogotiable : {
        type:String
    },
    cr_rental_detail_monthly_maintenance: {
        type:String
    },
    cr_rental_detail_avail_from : {
        type:String
    },
    cr_rental_detail_lease_duration: {
        type:String
    },
    cr_rental_detail_lockin_period : {
        type:String
    },
    
    cr_amenities_power_backup : {
        type:Boolean
    },
    cr_amenities_lift: {
        type:Boolean
    },
    cr_amenities_parking : {
        type:Boolean
    },
    cr_amenities_washroom : {
        type:Boolean
    },
    cr_amenities_water_storage  : {
        type:Boolean
    },
    cr_amenities_security : {
        type:Boolean
    },
    cr_amenities_wifi : {
        type:Boolean
    },
   
    
   

    
    images:{
        type:[]
    },
    date:{
        type: Date,
        default: Date.now
    },
    primium_expiry_date:{
        type:Date ,
        default:Date.now
    },
  });

  module.exports = mongoose.model('cmr_prop', cmr_PropSchema);
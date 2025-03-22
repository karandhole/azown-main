const mongoose = require('mongoose');
const { Schema } = mongoose;

const rfm_PropSchema = new Schema({
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
   
    rfm_detail_description:{
        type:String
    },
    rfm_detail_title:{
        type:String
    },
    rfm_detail_app_type :{
        type:String
    },
    rfm_detail_bhk_type :{
        type:String
    },
    rfm_detail_floor :{
        type:String
    },
    rfm_detail_total_floor :{
        type:String
    },
    rfm_detail_prop_age:{
        type:String
    },
    rfm_detail_facing:{
        type:String
    },
    rfm_detail_builtup_area :{
        type:String
    },
    rfm_detail_room_type:{
        type:String
    },
    rfm_detail_tenent_type :{
        type:String
    },
    rfm_detail_furnishing :{
        type:String
    },
    rfm_detail_parking :{
        type:String
    },
    rfm_detail_bathroom :{
        type:String
    },
    rfm_detail_balcony :{
        type:String
    },
    rfm_detail_water_supply :{
        type:String
    },
    
    rfm_rules_is_non_veg_allowed :{
        type:Boolean
    },
    
    rfm_location_state:{
        type:String
    },
    rfm_location_city:{
        type:String
    },
    rfm_location_latitiude:{
        type:String
    },
    rfm_location_longitude:{
        type:String
    },
    rfm_location_iframe:{
        type:String
    },
    
    rfm_rental_detail_rent :{
        type:String
    },
    rfm_rental_detail_exp_deposit:{
        type:String
    },
    rfm_rental_detail_is_nogotiable:{
        type:String
    },
    rfm_rental_detail_monthly_maintenance:{
        type:String
    },
    rfm_rental_detail_avail_from:{
        type:String
    },
    
    rfm_amenities_lift:{
        type:Boolean
    },
    rfm_amenities_ac:{
        type:Boolean
    },
    rfm_amenities_intercom:{
        type:Boolean
    },
    rfm_amenities_children_play_area:{
        type:Boolean
    },
    rfm_amenities_servant_room:{
        type:Boolean
    },
    rfm_amenities_gas_pipeline:{
        type:Boolean
    },
    rfm_amenities_rainwater_harvesting:{
        type:Boolean
    },
    rfm_amenities_housekeepiing:{
        type:Boolean
    },
    rfm_amenities_visitor_parking:{
        type:Boolean
    },
    rfm_amenities_internet:{
        type:Boolean
    },
    rfm_amenities_club_house:{
        type:Boolean
    },
    rfm_amenities_swimming_pool:{
        type:Boolean
    },
    rfm_amenities_fire_safety:{
        type:Boolean
    },
    rfm_amenities_shopping_center:{
        type:Boolean
    },
    rfm_amenities_park:{
        type:Boolean
    },
    rfm_amenities_sewage_treatment:{
        type:Boolean
    },
    rfm_amenities_power_backup:{
        type:Boolean
    },
    rfm_amenities_gated_security:{
        type:Boolean
    },
    rfm_amenities_gym:{
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

  module.exports = mongoose.model('rfm_prop', rfm_PropSchema);
const mongoose = require('mongoose');
const { Schema } = mongoose;

const plot_PropSchema = new Schema({
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
   
    ps_detail_description :{
        type:String
    },
    ps_detail_title:{
        type:String
    },
    ps_detail_plot_length :{
        type:String
    },
    ps_detail_plot_width :{
        type:String
    },
    ps_detail_width_of_facing_road:{
        type:String
    },
    ps_detail_has_boundary :{
        type:Boolean
    },
    ps_detail_inside_gated_project:{
        type:Boolean
    },
    
    ps_rules_allowed_floors :{
        type:String
    },
    
    ps_location_state:{
        type:String
    },
    ps_location_city:{
        type:String
    },
    ps_location_latitiude:{
        type:String
    },
    ps_location_longitude:{
        type:String
    },
    
    ps_sale_detail_price:{
        type:String
    },
    ps_sale_detail_available_from :{
        type:String
    },
    ps_sale_detail_is_negotiable:{
        type:Boolean
    },
    ps_sale_detail_currently_under_loan:{
        type:Boolean

    },
    
    ps_amenities_water:{
        type:Boolean
    },
    ps_amenities_sewage_connection:{
        type:Boolean
    },
    ps_amenities_gated_security:{
        type:Boolean
    },
    ps_amenities_electricity_connection:{
        type:Boolean
    },
    
    ps_info_ownership :{
        type:String
    },
    ps_info_khata_certificate_is_available:{
        type:Boolean
    },
    ps_info_conversion_certificate_is_available:{
        type:Boolean
    },
    ps_info_sale_deed_certificate_is_available:{
        type:Boolean
    },
    ps_info_encumbrance_certificate_is_available:{
        type:Boolean
    },
    ps_info_is_rera_approved:{
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

  module.exports = mongoose.model('plot_prop', plot_PropSchema);



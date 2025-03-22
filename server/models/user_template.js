const mongoose = require('mongoose');
const { Schema } = mongoose;

const user_templateSchema = new Schema({
    user_id : { 
        type: String,

    }   ,
   template_data: {
        type: String,
    },
    
}, { timestamps: true });
const user_template = mongoose.model('user_template', user_templateSchema);
module.exports = user_template;

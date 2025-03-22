const rr_props = require("../models/rr_propery");
const rr_master = require("../models/property_master");
const rpg_props = require('../models/rr-pg')
const lead = require("../models/lead");
const User = require('../models/user')
const { getObjectSignedUrl } = require('../Storage/s3');
const rrs_props = require("../models/rrs_props");
const rfm_props = require('../models/rr-flat')
const cmr_props = require('../models/cm-rent')
const cms_props = require('../models/cm-sale')
const plot_props = require('../models/land-plot')
const like = require('../models/like')




const newlike = async (req, res) => {
  try {
    console.log(req.user.id);
    console.log(req.body.property_id);
    console.log(req.body.property_type);
    const property_id = req.body.property_id;
    const property_type = req.body.property_type;

    const client_id = req.user.id

    let likedata = new like({ property_id, property_type, client_id });
    await likedata.save();

    if (property_type === 1) {
      await rr_props.updateOne({ _id:property_id }, { $push: { like: req.user.id } });
      res.json({ success: "Liked Successful.." });
    } else if (property_type === 2) {
    await rrs_props.updateOne({ _id:property_id }, { $push: { like: req.user.id } });
      res.json({ success: "Liked Successful.." });

    } else if (property_type === 3) {
      await rpg_props.updateOne({ _id:property_id }, { $push: { like: req.user.id } });
      res.json({ success: "Liked Successful.." });
    } else if (property_type === 4) {
      await rfm_props.updateOne({ _id:property_id }, { $push: { like: req.user.id } });
      res.json({ success: "Liked Successful.." });
    } else if (property_type === 5) {
      await cmr_props.updateOne({ _id:property_id }, { $push: { like: req.user.id } });
      res.json({ success: "Liked Successful.." });

    } else if (property_type === 6) {
    await cms_props.updateOne({ _id:property_id }, { $push: { like: req.user.id } });
      res.json({ success: "Liked Successful.." });

    } else if (property_type === 7) {
      await plot_props.updateOne({ _id:property_id }, { $push: { like: req.user.id } });
      res.json({ success: "Liked Successful.." });
    }

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
}

const userliked= async (req, res) => {
    console.log(req.user.id)
    console.log(req.params.ptype)
  
    try {
      
      let prop = []
      let property_type = parseInt(req.params.ptype)
      let client_id = req.user.id
      let data = await like.find({ $and: [{ client_id }, { property_type }] });
   
      data.forEach((element) => {
        prop.push(element.property_id)
      });
      console.log(prop);
  
      let propdata
      if (property_type === 1) {
        propdata = await rr_props.find({ _id: { $in: prop } })
        console.log(propdata)
      } else if (property_type === 2) {
        propdata = await rrs_props.find({ _id: { $in: prop } })
      } else if (property_type === 3) {
        propdata = await rpg_props.find({ _id: { $in: prop } })
      } else if (property_type === 4) {
        propdata = await rfm_props.find({ _id: { $in: prop } })
      } else if (property_type === 5) {
        propdata = await cmr_props.find({ _id: { $in: prop } })
      } else if (property_type === 6) {
        propdata = await cms_props.find({ _id: { $in: prop } })
      } else if (property_type === 7) {
        propdata = await plot_props.find({ _id: { $in: prop } })
      }
 
  
      for (let index = 0; index < propdata.length; index++) {
        let element = propdata[index];
       
        let imgurl = []
        for (let post of element.images) {
          let posturl = await getObjectSignedUrl(post)
          imgurl.push(posturl)
        }
        element.images= imgurl
        }
  
      res.json(propdata);
    } catch {
      res.json({ error: "Not found" });
    }
  }

module.exports = {  newlike ,userliked };
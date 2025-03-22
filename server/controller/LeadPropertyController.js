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


const leadcreate = async (req, res) => {
  try {
    console.log(req.user.id);
    console.log(req.body.property_id);
    console.log(req.body.property_type);
    const _id = req.body.property_id;
    const type = req.body.property_type;
    let property;
    let leadpp;
    if (type === 1) {
      property = await rr_props.findOne({ _id });
      leadpp = new lead({
        property_id: _id,
        property_type: type,
        property_lead_client_id: req.user.id,
        property_lead_owner_id: property.userid,
        property_lead_handler_id: property.handlerid,
        property_lead_stage: 0
      });
      await leadpp.save();
      await rr_props.updateOne({ _id }, { $push: { lead: req.user.id } });
      res.json({ success: "Lead is created" });
    } else if (type === 2) {
      property = await rrs_props.findOne({ _id });
      leadpp = new lead({
        property_id: _id,
        property_type: type,
        property_lead_client_id: req.user.id,
        property_lead_owner_id: property.userid,
        property_lead_handler_id: property.handlerid,
        property_lead_stage: 0
      });
      await leadpp.save();
      await rrs_props.updateOne({ _id }, { $push: { lead: req.user.id } });
      res.json({ success: "Lead is created" });

    } else if (type === 3) {
      property = await rpg_props.findOne({ _id });
      leadpp = new lead({
        property_id: _id,
        property_type: type,
        property_lead_client_id: req.user.id,
        property_lead_owner_id: property.userid,
        property_lead_handler_id: property.handlerid,
        property_lead_stage: 0
      });
      await leadpp.save();
      await rpg_props.updateOne({ _id }, { $push: { lead: req.user.id } });
      res.json({ success: "Lead is created" });
    } else if (type === 4) {
      property = await rfm_props.findOne({ _id });
      leadpp = new lead({
        property_id: _id,
        property_type: type,
        property_lead_client_id: req.user.id,
        property_lead_owner_id: property.userid,
        property_lead_handler_id: property.handlerid,
        property_lead_stage: 0
      });
      await leadpp.save();
      await rfm_props.updateOne({ _id }, { $push: { lead: req.user.id } });
      res.json({ success: "Lead is created" });

    } else if (type === 5) {
      property = await cmr_props.findOne({ _id });
      leadpp = new lead({
        property_id: _id,
        property_type: type,
        property_lead_client_id: req.user.id,
        property_lead_owner_id: property.userid,
        property_lead_handler_id: property.handlerid,
        property_lead_stage: 0
      });
      await leadpp.save();
      await cmr_props.updateOne({ _id }, { $push: { lead: req.user.id } });
      res.json({ success: "Lead is created" });

    } else if (type === 6) {
      property = await cms_props.findOne({ _id });
      leadpp = new lead({
        property_id: _id,
        property_type: type,
        property_lead_client_id: req.user.id,
        property_lead_owner_id: property.userid,
        property_lead_handler_id: property.handlerid,
        property_lead_stage: 0
      });
      await leadpp.save();
      await cms_props.updateOne({ _id }, { $push: { lead: req.user.id } });
      res.json({ success: "Lead is created" });

    } else if (type === 7) {
      property = await plot_props.findOne({ _id });
      leadpp = new lead({
        property_id: _id,
        property_type: type,
        property_lead_client_id: req.user.id,
        property_lead_owner_id: property.userid,
        property_lead_handler_id: property.handlerid,
        property_lead_stage: 0
      });
      await leadpp.save();
      await plot_props.updateOne({ _id }, { $push: { lead: req.user.id } });
      res.json({ success: "Lead is created" });
    }

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
}
const userleaddata = async (req, res) => {
  // console.log(req.user.id)

  try {
    let result = []
    let prop = []
    let user = []
    // console.log(req.params.ptype==='1')
    let property_type = parseInt(req.params.ptype)
    let property_lead_client_id = req.user.id

    let data = await lead.find({ $and: [{ property_lead_client_id }, { property_type }] });
    // console.log(data)
    data.forEach((element) => {
      // console.log(element.property_type===property_type)
      prop.push(element.property_id)
      user.push(element.property_lead_handler_id)
    });
    // console.log(prop);
    // console.log(user);
    // console.log(data);
    let propdata
    if (property_type === 1) {
      propdata = await rr_props.find({ _id: { $in: prop } })
      // console.log(propdata)
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
    const userdata = await User.find({ _id: { $in: user } })
    // console.log(userdata);

    for (let index = 0; index < data.length; index++) {
      let element = data[index];
      let propval
      let userval
      for (let i = 0; i < propdata.length; i++) {
        if (element.property_id == propdata[i]._id) {
          propval = propdata[i]
        }
      }
      console.log(propval);
      for (let j = 0; j < userdata.length; j++) {
        if (element.property_lead_handler_id == userdata[j]._id) {
          userval = userdata[j]
        }
      }
      console.log(userval)

      // console.log(data);
      // console.log(propdata);
      // console.log(userdata);

      let { name, email , phone } = userval
      let images, title, location, price

      if (property_type === 1) {
        images = propval.images
        title = propval.rr_detail_title
        location = propval.rr_location_city
        price = propval.rr_rental_detail_rent

      } else if (property_type === 2) {
        images = propval.images
        title = propval.rrs_detail_title
        location = propval.rrs_location_city
        price = propval.rrs_resale_detail_exp_price

      } else if (property_type === 3) {
        images = propval.images
        title = propval.rpg_detail_title
        location = propval.rpg_location_city
        price = propval.rpg_detail_room_rent

      } else if (property_type === 4) {
        images = propval.images
        title = propval.rfm_detail_title
        location = propval.rfm_location_city
        price = propval.rfm_rental_detail_rent

      } else if (property_type === 5) {
        images = propval.images
        title = propval.cr_detail_title
        location = propval.cr_location_city
        price = propval.cr_rental_detail_rent

      } else if (property_type === 6) {
        images = propval.images
        title = propval.cs_detail_title
        location = propval.cs_location_city
        price = propval.cs_resale_details_exp_price

      } else if (property_type === 7) {
        images = propval.images
        title = propval.ps_detail_title
        location = propval.ps_location_city
        price = propval.ps_sale_detail_price

      }
      // let { images } = propval
      let imgurl = []
      for (let post of images) {
        let posturl = await getObjectSignedUrl(post)
        imgurl.push(posturl)
      }

      element = { ...element._doc, ...{ imgurl }, ...{ email }, ...{ name }, ...{ title }, ...{ location }, ...{ price } , ...{ phone } }
      // console.log("final");
      console.log(element);
      result.push(element)

    }

    console.log(result);

    res.json(result);
  } catch {
    res.json({ error: "Not found" });
  }
}
const updateleadstage = async (req, res) => {
  try {
    const { _id, property_lead_stage } = req.body
    // console.log(req.body);
    await lead.updateOne({ _id }, { $set: { property_lead_stage } })
    res.json({ result: "updated lead" })
  } catch {
    res.json({ error: "Not found" });
  }

}


const ownerlead = async (req, res) => {
  try {
   const property_id = req.params.pid;
    const property_lead_owner_id = req.params.uid
    const property_lead_handler_id = req.params.uid
    const type = req.params.type
    // const userDat = await User.findOne({ _id: property_lead_owner_id })
    let data
    if (type == "2") {
      data = await lead.find({$and: [{property_id} , {property_lead_handler_id}]})
    } else {
      data = await lead.find({ $and: [{ property_id }, { property_lead_owner_id }] })
    }     
    const users = []
    let result = []
    for (let i = 0; i < data.length; i++) {
      users.push(data[i].property_lead_client_id)
    }
    const userdata = await User.find({ _id: { $in: users } })
    for (let i = 0; i < data.length; i++) {
      let element = data[i];
      let userval;
      for (let j = 0; j < userdata.length; j++) {
        if (userdata[j]._id == element.property_lead_client_id) {
          userval = userdata[j]
        }
      }
      const { name, email , phone } = userval
      element = { ...element._doc, ...{ name }, ...{ email } ,...{phone} }
      // console.log(element)
      // console.log(userval);
      result.push(element)

    }
    console.log(result);
    res.json(result)
  } catch {
    res.json({ error: "Not found" });
  }
}

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

    if (type === 1) {
      await rr_props.updateOne({ _id:property_id }, { $push: { like: req.user.id } });
      res.json({ success: "Liked Successful.." });
    } else if (type === 2) {
    await rrs_props.updateOne({ _id:property_id }, { $push: { like: req.user.id } });
      res.json({ success: "Liked Successful.." });

    } else if (type === 3) {
      await rpg_props.updateOne({ _id:property_id }, { $push: { like: req.user.id } });
      res.json({ success: "Liked Successful.." });
    } else if (type === 4) {
      await rfm_props.updateOne({ _id:property_id }, { $push: { like: req.user.id } });
      res.json({ success: "Liked Successful.." });
    } else if (type === 5) {
      await cmr_props.updateOne({ _id:property_id }, { $push: { like: req.user.id } });
      res.json({ success: "Liked Successful.." });

    } else if (type === 6) {
    await cms_props.updateOne({ _id:property_id }, { $push: { like: req.user.id } });
      res.json({ success: "Liked Successful.." });

    } else if (type === 7) {
      await plot_props.updateOne({ _id:property_id }, { $push: { like: req.user.id } });
      res.json({ success: "Liked Successful.." });
    }

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
}

module.exports = { leadcreate, userleaddata, updateleadstage, ownerlead,newlike };
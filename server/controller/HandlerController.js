const User = require("../models/user");
const lead = require("../models/lead");
const handler = require("../models/handler");
const { getObjectSignedUrl } = require("../Storage/s3");
const rr_props = require("../models/rr_propery");
const rrs_props = require("../models/rrs_props");
const rpg_props = require("../models/rr-pg");
const rfm_props = require("../models/rr-flat");
const cmr_props = require("../models/cm-rent");
const cms_props = require("../models/cm-sale");
const plot_props = require("../models/land-plot");

const createHandlerRequest = async (req, res) => {
  try {
    const broker_id = req.user.id;
    const { property_id, property_type, owner_id } = req.body;
    const handlerCreate = await handler.create({
      broker_id,
      property_id,
      property_type,
      owner_id,
    });
    if (property_type === 1) {
      await rr_props.updateOne(
        { _id: property_id },
        { $push: { handlerIds: req.user.id } }
      );
    } else if (property_type === 2) {
      await rrs_props.updateOne(
        { _id: property_id },
        { $push: { handlerIds: req.user.id } }
      );
    } else if (property_type === 3) {
      await rpg_props.updateOne(
        { _id: property_id },
        { $push: { handlerIds: req.user.id } }
      );
    } else if (property_type === 4) {
      await rfm_props.updateOne(
        { _id: property_id },
        { $push: { handlerIds: req.user.id } }
      );
    } else if (property_type === 5) {
      await cmr_props.updateOne(
        { _id: property_id },
        { $push: { handlerIds: req.user.id } }
      );
    } else if (property_type === 6) {
      await cms_props.updateOne(
        { _id: property_id },
        { $push: { handlerIds: req.user.id } }
      );
    } else if (property_type === 7) {
      await plot_props.updateOne(
        { _id: property_id },
        { $push: { handlerIds: req.user.id } }
      );
    }
    res.json({ success: "Request Sent Successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
};

const handledproperties = async (req, res) => {
  try {
    const handlerprops = await rr_props.find({ handlerid: req.user.id });
    // console.log(req.user.id);
    res.json(handlerprops);
  } catch {
    res.json({ error: "Not found" });
  }
};

const handlerRequests = async (req, res) => {
  try {
    const property_id = req.params.id;
    const owner_id = req.user.id;
    console.log(property_id, owner_id);

    const data = await handler.find({
      $and: [{ property_id }, { owner_id }],
    });
    console.log("data", data);
    const users = [];
    let result = [];
    for (let i = 0; i < data.length; i++) {
      users.push(data[i].broker_id);
    }
    const userdata = await User.find({ _id: { $in: users } });
    for (let i = 0; i < data.length; i++) {
      let element = data[i];
      let userval;
      for (let j = 0; j < userdata.length; j++) {
        if (userdata[j]._id == element.broker_id) {
          userval = userdata[j];
        }
      }
      const { name, email, phone } = userval;
      element = { ...element._doc, ...{ name }, ...{ email }, ...{ phone } };
      // console.log(element)
      console.log(userval);
      result.push(element);
    }
    console.log(userdata);
    res.json(result);
  } catch (err) {
    console.log(err);
    res.json({ error: "Not found" });
  }
};

const handlingRequests = async (req, res) => {
  try {
    let result = [];
    let prop = [];
    let user = [];
    const type = req.params.type;
    let data = await handler.find({
      $and: [{ broker_id: req.user.id }, { property_type: type }],
    });
    data.forEach((element) => {
      prop.push(element.property_id);
      user.push(element.owner_id);
    });
    console.log(data);

    let propdata;
    let userdata;
    if (type == 1) {
      propdata = await rr_props.find({ _id: { $in: prop } });
    } else if (type == 2) {
      propdata = await rrs_props.find({ _id: { $in: prop } });
    } else if (type == 3) {
      propdata = await rpg_props.find({ _id: { $in: prop } });
    } else if (type == 4) {
      propdata = await rfm_props.find({ _id: { $in: prop } });
    } else if (type == 5) {
      propdata = await cmr_props.find({ _id: { $in: prop } });
    } else if (type == 6) {
      propdata = await cms_props.find({ _id: { $in: prop } });
    } else if (type == 7) {
      propdata = await plot_props.find({ _id: { $in: prop } });
    }
    console.log(propdata);
    userdata = await User.find({ _id: { $in: user } });
    console.log(userdata);
    for (let index = 0; index < data.length; index++) {
      let element = data[index];
      let propval;
      let userval;
      for (let i = 0; i < propdata.length; i++) {
        if (element.property_id == propdata[i]._id) {
          propval = propdata[i];
        }
      }
      for (let i = 0; i < userdata.length; i++) {
        if (element.owner_id == userdata[i]._id) {
          userval = userdata[i];
        }
      }

      let { name, email, phone } = userval;
      let { images } = propval;
      let imgurl = [];
      for (let post of images) {
        let posturl = await getObjectSignedUrl(post);
        imgurl.push(posturl);
      }
      const imgs = { imgurl };
      element = {
        ...element._doc,
        ...imgs,
        ...{ email },
        ...{ name },
        ...{ phone },
      };
      // element = { ...element._doc, ...{ imgurl }, ...{ email }, ...{ name } };
      //    console.log(element);
      result.push(element);
    }

    console.log(result);

    res.json(result);
  } catch (error) {
    console.log(error);

    res.json({ error: "Not found" });
  }
};

const updateHandlerStage = async (req, res) => {
  try {
    const { _id, stage } = req.params;
    console.log(_id, stage);
    const data = await handler.updateOne({ _id }, { $set: { stage } });
    let data1 = await handler.findById(_id);

    console.log(data1);
    if (stage == 10) {
      const data = await handler.findOne({ _id });
      const { property_id, broker_id } = data;
      console.log(property_id, broker_id, req.user.id);
      if (data.property_type == 1) {
        await rr_props.updateOne(
          { _id: property_id },
          { $set: { handlerid: broker_id } }
        );
        const data = await rr_props.findOne({ _id: property_id });
        console.log(data);
      } else if (data.property_type == 2) {
        await rrs_props.updateOne(
          { _id: property_id },
          { $set: { handlerid: broker_id } }
        );
        const propertiesrrs = await rrs_props.findOne({ _id: property_id });
        console.log(propertiesrrs);
      } else if (data.property_type == 3) {
        await rpg_props.updateOne(
          { _id: property_id },
          { $set: { handlerid: broker_id } }
        );
        const propertiesrpg = await rpg_props.findOne({ _id: property_id });
        console.log(propertiesrpg);
      } else if (data.property_type == 4) {
        await rfm_props.updateOne(
          { _id: property_id },
          { $set: { handlerid: broker_id } }
        );
        const propertiesrfm = await rfm_props.findOne({ _id: property_id });
        console.log(propertiesrfm);
      } else if (data.property_type == 5) {
        await cmr_props.updateOne(
          { _id: property_id },
          { $set: { handlerid: broker_id } }
        );
        const propertiescmr = await cmr_props.findOne({ _id: property_id });
        console.log(propertiescmr);
      } else if (data.property_type == 6) {
        await cms_props.updateOne(
          { _id: property_id },
          { $set: { handlerid: broker_id } }
        );
        const propertiescms = await cms_props.findOne({ _id: property_id });
        console.log(propertiescms);
      } else if (data.property_type == 7) {
        await plot_props.updateOne(
          { _id: property_id },
          { $set: { handlerid: broker_id } }
        );
        const propertiesplot = await plot_props.findOne({ _id: property_id });
        console.log(propertiesplot);
      }
    }
    res.json({ message: "Update stage success" });
  } catch (error) {
    console.log(error);
    res.json({ error: "Not found" });
  }
};

const handlerwithid = async (req, res) => {
  try {
    const data = await handler.find({
      $and: [
        { property_owner_id: req.user.id },
        { property_id: req.params.id },
        { stage: 0 },
      ],
    });
    console.log(data);
    const arr = [];
    data.forEach((element) => {
      arr.push(element.broker_id);
      console.log(element.broker_id);
    });
    userdata = await User.find({ _id: { $in: arr } });
    //  console.log(userdata);
    res.json(userdata);
  } catch {
    res.json({ error: "Not found" });
  }
};

const removeHandler = async (req, res) => {
  try {
    const userid = req.params.uid;
    const _id = req.params.pid;
    const pType = req.params.ptype;
    console.log(userid, _id, pType);
    if (pType == "1") {
      await rr_props.updateOne({ _id }, { $set: { handlerid: userid } });
    } else if (pType == "2") {
      await rrs_props.updateOne({ _id }, { $set: { handlerid: userid } });
    } else if (pType == "3") {
      await rpg_props.updateOne({ _id }, { $set: { handlerid: userid } });
    } else if (pType == "4") {
      await rfm_props.updateOne({ _id }, { $set: { handlerid: userid } });
    } else if (pType == "5") {
      await cmr_props.updateOne({ _id }, { $set: { handlerid: userid } });
    } else if (pType == "6") {
      await cms_props.updateOne({ _id }, { $set: { handlerid: userid } });
    } else if (pType == "7") {
      await plot_props.updateOne({ _id }, { $set: { handlerid: userid } });
    }

    res.status(200).json({ message: "Handler removed" });
  } catch (error) {
    res.json({ error: "Not found" });
  }
};

module.exports = {
  handledproperties,
  handlerwithid,
  createHandlerRequest,
  handlingRequests,
  updateHandlerStage,
  handlerRequests,
  removeHandler
};

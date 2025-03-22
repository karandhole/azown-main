const vender_service = require("../models/vender_service");
const { uploadFile, getObjectSignedUrl, deleteFile } = require("../Storage/s3");
const user = require("../models/user");
const crypto = require("crypto");
const Service = require("../models/service");
const service_lead = require("../models/service_lead");
const { default: mongoose } = require("mongoose");
const generateFileName = (bytes = 32) =>
  crypto.randomBytes(bytes).toString("hex");

const createVenderService = async (req, res) => {
  try {
    const {
      service_name,
      service_description,
      service_charge,
      charge_unit,
      sub_service_name,
      service_id ,
    } = req.body;
    const vender_id = req.user.id;

    const venderService = await vender_service.create({
      service_id,
      service_name,
      sub_service_name,
      service_description,
      service_charge,
      charge_unit,
      vender_id,
    });

    res.status(201).json(venderService);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createService = async (req, res) => {
  const { file } = req;

  try {
    let service_image = null;
    if (file) {
      service_image = generateFileName();
      await uploadFile(file.buffer, service_image, file.mimetype);
    }
    const { service_name, service_description } = req.body;
    const service = await Service.create({
      service_name,
      service_description,
      service_image,
    });
    res.status(201).json(service);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const fetchVenderByService = async (req, res) => {
  try {
    const { service_id } = req.params;
    const venderService = await vender_service.find({ service_id });
    // console.log(venderService)
    let venderId = [];
    for (let i = 0; i < venderService.length; i++) {
      venderId.push(venderService[i].vender_id);
    }
    // console.log(venderId)
    const venderData = await user.find({ _id: { $in: venderId } });
    // console.log(venderData)
    for (let i = 0; i < venderService.length; i++) {
      for (let j = 0; j < venderData.length; j++) {
        if (venderService[i].vender_id == venderData[j]._id) {
          let { name } = venderData[j];
          let vender = { vender_name: name };
          venderService[i] = { ...venderService[i]._doc, ...vender };
          // console.log(venderService[i])
        }
      }
    }

    res.status(201).json(venderService);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateLeadStage = async (req, res) => {
  try {
    const _id = req.params.id;
    const lead_stage = req.params.stage;
    // console.log(req.params);
 
    const serviceLead = await service_lead.findByIdAndUpdate(_id, {
      lead_stage,
    });
    res.status(200).json({message: "Lead Stage Updated"});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const fetchVenderOwnService = async (req, res) => {
  try {
    const vender_id = req.user.id;
    const venderService = await vender_service.find({ vender_id });
    res.status(200).json(venderService);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getVenderServiceById = async (req, res) => {
  try {
    const { vender_id } = req.params;
    const venderService = await vender_service.find({ vender_id });
    res.status(200).json(venderService);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const create_service_lead = async (req, res) => {
  try {
    const { service_id, vender_id, _id , lead_stage } = req.body;
    console.log(req.body);
    const client_id = req.user.id;
    const serviceLead = await service_lead.create({
      service_id,
      client_id,
      vender_id,
      lead_stage
    });
    const update = await vender_service.findByIdAndUpdate(_id, {
      $push: { service_leads: client_id },
    });
console.log(update)
    res.status(201).json({success: true});
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const my_service_lead = async (req, res) => {
  try {
    const vender_id = req.params.uid;
    const service_id = req.params.sid;
    const serviceLead = await service_lead.find({ vender_id, service_id });
    const client_id = [];
    for (let i = 0; i < serviceLead.length; i++) {
      client_id.push(serviceLead[i].client_id);
    }
    const clientData = await user.find({ _id: { $in: client_id } });
    for (let i = 0; i < serviceLead.length; i++) {
      for (let j = 0; j < clientData.length; j++) {
        if (serviceLead[i].client_id == clientData[j]._id) {
          let { name, phone } = clientData[j];
          serviceLead[i] = {
            ...serviceLead[i]._doc,
            ...{ client_name: name },
            ...{ client_phone: phone },
          };
        }
      }
    }

    res.status(200).json(serviceLead);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const my_request_service_lead = async (req, res) => {
  try {
    const client_id = req.user.id;
    const serviceLead = await service_lead.find({ client_id });
    const vender_id = [];
    for (let i = 0; i < serviceLead.length; i++) {
      vender_id.push(serviceLead[i].vender_id);
    }
    const venderData = await user.find({ _id: { $in: vender_id } });
    for (let i = 0; i < serviceLead.length; i++) {
      for (let j = 0; j < venderData.length; j++) {
        if (serviceLead[i].vender_id == venderData[j]._id) {
          let { name, phone } = venderData[j];
          serviceLead[i] = {
            ...serviceLead[i]._doc,
            ...{ vender_name: name },
            ...{ vender_phone: phone },
          };
        }
      }
    }

    res.status(200).json(serviceLead);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createVenderService,
  createService,
  fetchVenderByService,
  updateLeadStage,
  fetchVenderOwnService,
  getVenderServiceById,
  create_service_lead,
    my_service_lead,
    my_request_service_lead,
    
};

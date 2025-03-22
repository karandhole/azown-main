const fetchuser = require("../middleware/fetchuser");
const rr_props = require("../models/rr_propery");
const rr_master = require("../models/property_master");
const lead = require("../models/lead");
const User = require('../models/user')
const handler = require("../models/handler");
const { body, validationResult } = require("express-validator");
const express = require("express");
const { route } = require("./user");
const router = express.Router();
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const rrpropconroller = require("../controller/rr_propcontroller");

router.post("/handlerreq", fetchuser, async (req, res) => {
  try {
    const { property_id, property_owner_id } = req.body
    const broker_id = req.user.id
    const newdata = new handler({
      property_id,
      property_owner_id,
      broker_id
    });
    await newdata.save();
    await rr_props.updateOne({ _id: req.body.property_id }, { $push: { handlerIds: req.user.id } });


    res.json({ success: "send handler requested" });
  } catch {
    res.json({ error: "Not found" });
  }
});


router.get("/gethandler", fetchuser, async (req, res) => {
  try {
    const data = await handler.find({ broker_id: req.user.id });
    res.json(data);
  } catch {
    res.json({ error: "Not found" });
  }
});
router.get("/getuserrrprop", fetchuser, async (req, res) => {
  try {
    const userId = req.user.id;
    let data = await rr_props.find({ userid: userId });
    res.send(data);
  } catch {
    res.json({ error: "Not found" });
  }
});
router.get("/rrproplead/:id", fetchuser, async (req, res) => {
  try {
    // let data = await lead.find({$and :[{property_id:req.body.id},{property_client_id:req.user.id}]})
    let data = await lead.find({ property_id: req.params.id });
    res.json(data);
  } catch {
    res.json({ error: "Not found" });
  }
});

router.put("/paymentreq/:id", fetchuser, async (req, res) => {
  try {
    console.log(req.params.id);
    let data = await lead.updateOne(
      { _id: req.params.id },
      {
        $set: {
          property_closure_requested: false,
          property_closure_accepted: true,
        },
      }
    );
    res.json({ success: "true" });
  } catch {
    res.json({ error: "Not found" });
  }
});
router.post(
  "/addprop",
  upload.array("image"),
  fetchuser,
  rrpropconroller.add_rr_prop
);
router.post(
  "/add-rrs-prop",
  upload.array("image"),
  fetchuser,
  rrpropconroller.add_rrs_prop
);
router.post(
  "/add-rpg-prop",
  upload.array("image"),
  fetchuser,
  rrpropconroller.add_rpg_prop
);
router.post(
  "/add-rfm-prop",
  upload.array("image"),
  fetchuser,
  rrpropconroller.add_rfm_prop
);
router.post(
  "/add-cmr-prop",
  upload.array("image"),
  fetchuser,
  rrpropconroller.add_cmr_prop
);
router.post(
  "/add-cms-prop",
  upload.array("image"),
  fetchuser,
  rrpropconroller.add_cms_prop
);
router.post(
  "/add-plot-prop",
  upload.array("image"),
  fetchuser,
  rrpropconroller.add_plot_prop
);
router.put( "/update-rr/:id/:type", upload.array("image"), fetchuser, rrpropconroller.update_rr_prop);
router.put( "/update-rrs/:id/:type", upload.array("image"), fetchuser, rrpropconroller.update_rrs_prop);
router.put( "/update-rpg/:id/:type", upload.array("image"), fetchuser, rrpropconroller.update_rpg_prop);
router.put( "/update-rfm/:id/:type", upload.array("image"), fetchuser, rrpropconroller.update_rfm_prop);
router.put( "/update-cmr/:id/:type", upload.array("image"), fetchuser, rrpropconroller.update_cmr_prop);
router.put( "/update-cms/:id/:type", upload.array("image"), fetchuser, rrpropconroller.update_cms_prop);
router.put( "/update-plot/:id/:type", upload.array("image"), fetchuser, rrpropconroller.update_plot_prop);

router.get("/rr-detail/:id", rrpropconroller.single_rr_prop);
router.get("/rrs-detail/:id", rrpropconroller.single_rrs_prop);
router.get("/rfm-detail/:id", rrpropconroller.single_rfm_prop);
router.get("/rpg-detail/:id", rrpropconroller.single_rpg_prop);
router.get("/cmr-detail/:id", rrpropconroller.single_cmr_prop);
router.get("/cms-detail/:id", rrpropconroller.single_cms_prop);
router.get("/plot-detail/:id", rrpropconroller.single_plot_prop);


router.get("/getrrprop", rrpropconroller.get_rr_prop);
router.get("/getrrs", rrpropconroller.get_rrs)
router.get("/getrpg", rrpropconroller.get_rpg)
router.get("/getrfm", rrpropconroller.get_rfm)
router.get("/getcmr", rrpropconroller.get_cmr)
router.get("/getcms", rrpropconroller.get_cms)
router.get("/getplot", rrpropconroller.get_plot)

router.get("/get-top-rr", rrpropconroller.get_top_rr_prop);


router.get("/myrr", fetchuser, rrpropconroller.my_rr);
router.get("/myrrs", fetchuser, rrpropconroller.my_rrs)
router.get("/myrpg", fetchuser, rrpropconroller.my_rpg)
router.get("/myrfm", fetchuser, rrpropconroller.my_rfm)
router.get("/mycmr", fetchuser, rrpropconroller.my_cmr)
router.get("/mycms", fetchuser, rrpropconroller.my_cms)
router.get("/myplot", fetchuser, rrpropconroller.my_plot)

router.delete("/delete-rr/:id", fetchuser,   rrpropconroller.delete_rr_property  );
router.delete("/delete-rrs/:id", fetchuser,   rrpropconroller.delete_rrs_property  );
router.delete("/delete-rpg/:id", fetchuser,   rrpropconroller.delete_rpg_property  );
router.delete("/delete-rfm/:id", fetchuser,   rrpropconroller.delete_rfm_property  );
router.delete("/delete-cmr/:id", fetchuser,   rrpropconroller.delete_cmr_property  );
router.delete("/delete-cms/:id", fetchuser,   rrpropconroller.delete_cms_property  );
router.delete("/delete-plot/:id", fetchuser,   rrpropconroller.delete_plot_property  );


router.get("/user-rr-prop/:id/:type", rrpropconroller.user_rr_property);
router.get("/user-rrs-prop/:id/:type", rrpropconroller.user_rrs_property);
router.get("/user-rpg-prop/:id/:type", rrpropconroller.user_rpg_property);
router.get("/user-rfm-prop/:id/:type", rrpropconroller.user_rfm_property);
router.get("/user-cmr-prop/:id/:type", rrpropconroller.user_cmr_property);
router.get("/user-cms-prop/:id/:type", rrpropconroller.user_cms_property);
router.get("/user-plot-prop/:id/:type", rrpropconroller.user_plot_property);


router.post("/create-primium-template", fetchuser, rrpropconroller.create_primium_template);
router.get("/get-primium-template/:id", rrpropconroller.get_primium_template);
router.put("/update-primium-template/:id",upload.single('jsonFile'), fetchuser, rrpropconroller.update_primium_template);



router.get("/userdash", fetchuser, async (req, res) => {
  try {
    leaddash = await lead.find({ property_client_id: req.user.id });
    res.send(leaddash);
  } catch { }
});


module.exports = router;

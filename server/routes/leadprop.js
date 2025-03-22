const express = require("express");
const router = express.Router();
const LeadController = require('../controller/LeadPropertyController')
const fetchuser = require('../middleware/fetchuser')

router.post("/leadcreate", fetchuser,LeadController.leadcreate);
router.get("/userleaddata/:ptype", fetchuser, LeadController.userleaddata);
router.put("/updateleadstage", fetchuser, LeadController.updateleadstage)
router.get("/ownerlead/:uid/:pid/:usertype",LeadController.ownerlead)
router.post("/liked-property",fetchuser,LeadController.newlike)

module.exports = router;

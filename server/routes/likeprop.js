const express = require("express");
const router = express.Router();
const LikeController = require('../controller/LikeController')
const fetchuser = require('../middleware/fetchuser')



router.post("/like-property",fetchuser,LikeController.newlike)
router.get("/userlike/:ptype", fetchuser, LikeController.userliked);


module.exports = router;

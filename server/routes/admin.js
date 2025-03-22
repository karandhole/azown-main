const express = require("express");
const router = express.Router();
const Admin = require("../models/admin");
const controller = require("../controller/authController");

 
router.post("/admin-login", controller.adminLogin);
router.post("/admin-register", controller.adminRegister)
router.get("/admin-logout", controller.adminLogout);

module.exports = router;
// this file is the main router of our entire website

const express = require('express');


const router = express.Router();

const homeController = require("../controllers/home_controller");
router.get("/",homeController.home);
router.get("/sign-up",homeController.signup);


router.use("/user",require("./user"));

module.exports = router;
const express = require("express");
const {
  registerCarData

} = require("../controllers/dataController");


const router = express.Router();

router.route("/registercars").post(registerCarData);


module.exports = router;
const express = require("express");
const {
  getAllHoteleiros,
  createHoteleiro,
} = require("../controllers/hoteleiroController.js");

const router = express.Router();

router.get("/", getAllHoteleiros);
router.post("/", createHoteleiro);

module.exports = router;

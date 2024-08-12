const express = require("express");
const router = express.Router();
const {getresumeSeries} = require("../controllers/resumeSeries.controller");

router.get("/resumeSeries", getresumeSeries);

module.exports = router
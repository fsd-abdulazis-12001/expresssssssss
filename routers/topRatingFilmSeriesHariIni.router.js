

const express = require("express");
const router = express.Router();
const {getTopRatingFilmSeriesHariIni} = require("../controllers/topRatingFilmSeriesHariIni.controller");

router.get("/topRatingFilmSeriesHariIni", getTopRatingFilmSeriesHariIni);

module.exports = router
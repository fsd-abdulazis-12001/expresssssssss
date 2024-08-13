import express from "express";
const router = express.Router();
const {getSeriesPersembahanChill} = require("../controllers/seriesPersembahanChill.controller");

router.get("/SeriesPersembahanChill", getSeriesPersembahanChill);

module.exports = router
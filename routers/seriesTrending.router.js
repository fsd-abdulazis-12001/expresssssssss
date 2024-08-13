import express from "express";
const router = express.Router();
const {getSeriesTrending} = require("../controllers/seriesTrending.controller");

router.get("/SeriesTrending", getSeriesTrending);

module.exports = router
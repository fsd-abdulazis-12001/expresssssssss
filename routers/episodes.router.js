const express = require("express");
const router = express.Router();
const {getEpisodeList} = require("../controllers/episodes.controller");

router.get("/episodes", getEpisodeList);

module.exports = router


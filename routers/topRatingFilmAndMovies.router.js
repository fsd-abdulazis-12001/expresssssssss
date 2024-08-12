
const express = require("express");
const router = express.Router();
const {getTopRatingFilmAndMovies} = require("../controllers/topRatingFilmAndMovies.controller");

router.get("/topRatingFilmAndMovies", getTopRatingFilmAndMovies);

module.exports = router
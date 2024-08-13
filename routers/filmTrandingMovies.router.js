import express from "express";
const router = express.Router();
const {getFilmTrandingMovies} = require("../controllers/filmTrandingMovies.controller");

router.get("/filmTrandingMovies", getFilmTrandingMovies);

module.exports = router


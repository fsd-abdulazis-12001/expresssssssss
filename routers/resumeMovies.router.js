import express from "express";
const router = express.Router();
const {getresumeMovies} = require("../controllers/resumeMovies.controller");

router.get("/resumemovies", getresumeMovies);

module.exports = router
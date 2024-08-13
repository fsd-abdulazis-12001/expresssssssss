import express from "express";
const router = express.Router();
const {getGenres} = require("../controllers/genres.controller");

router.get("/genres", getGenres);

module.exports = router


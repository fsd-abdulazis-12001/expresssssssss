import express from "express";
const router = express.Router();
const {getRilisBaruMovies} = require("../controllers/rilisBaruMovies.controller");

router.get("/rilisBaruMovies", getRilisBaruMovies);

module.exports = router
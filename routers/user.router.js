import express from "express";
const router = express.Router();
const {getUsers} = require("../controllers/user.controller");

router.get("/users", getUsers);

module.exports = router


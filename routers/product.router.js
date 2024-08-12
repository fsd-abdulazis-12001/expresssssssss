const express = require("express");
const router = express.Router();
const {getProductFromID} = require("../controllers/product.controller");

router.get("/product/:id", getProductFromID);

module.exports = router


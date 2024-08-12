const express = require("express");
const router = express.Router();
const {GetListDaftarSaya, AddListDaftarSaya, RemoveListDaftarSaya} = require("../controllers/daftarSaya.controller");

router.get("/daftarsaya", GetListDaftarSaya);
router.post("/daftarsaya", AddListDaftarSaya);
router.delete("/daftarsaya/:idf", RemoveListDaftarSaya);

module.exports = router


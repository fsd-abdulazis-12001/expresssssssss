import express from "express";
const router = express.Router();
const {GetListDaftarSaya, AddDaftarSaya, RemoveDaftarSaya, PatchDaftarSaya} = require("../controllers/daftarSaya.controller");

router.get("/daftarsaya", GetListDaftarSaya);
router.post("/daftarsaya", AddDaftarSaya);
router.delete("/daftarsaya/:idf", RemoveDaftarSaya);
router.patch("/daftarsaya/:idf", PatchDaftarSaya);

module.exports = router


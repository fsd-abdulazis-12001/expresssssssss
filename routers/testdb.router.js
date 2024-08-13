import express from "express";
const router = express.Router();
const {GetUsers, Updateuser , Adduser} = require("../controllers/testdb.controller");

router.get('/users', GetUsers);
router.put('/updatename', Updateuser);
router.post('/addnewuser', Adduser);

module.exports = router


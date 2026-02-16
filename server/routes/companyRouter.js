const express = require("express")
const router = express.Router()
const {loginCompany} = require("../controllers/companyController")

router.post("/login",loginCompany)

module.exports = router
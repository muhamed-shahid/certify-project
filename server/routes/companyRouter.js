const express = require("express")
const router = express.Router()
const {loginCompany,registerCompany} = require("../controllers/companyController")

router.post("/login",loginCompany)
router.post("/register",registerCompany)

module.exports = router
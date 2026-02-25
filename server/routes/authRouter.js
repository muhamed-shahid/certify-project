const express = require("express")
const router = express.Router()
const {login,register, allCompanies} = require("../controllers/authController")

router.post("/login",login)
router.post("/register",register)
router.get("/companies",allCompanies)

module.exports = router

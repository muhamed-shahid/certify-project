const express = require("express")
const { allCompanies } = require("../controllers/adminController")
const { protect } = require("../middleware/authMiddleware")
const router = express.Router()


router.get("/companies",allCompanies)


module.exports = router
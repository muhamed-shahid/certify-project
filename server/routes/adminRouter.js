const express = require("express")
const { allCompanies, updateCompanyStaus } = require("../controllers/adminController")
const { protect, adminOnly } = require("../middleware/authMiddleware")
const router = express.Router()


router.get("/companies",protect,adminOnly,allCompanies)
router.put("/company/:id",protect,adminOnly,updateCompanyStaus)


module.exports = router
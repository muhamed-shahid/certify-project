const express = require("express")
const { allCompanies, updateCompanyStaus, allUniversities, updateUniversityStaus, adminDash } = require("../controllers/adminController")
const { protect, adminOnly } = require("../middleware/authMiddleware")
const router = express.Router()


router.get("/companies",protect,adminOnly,allCompanies)
router.put("/company/:id",protect,adminOnly,updateCompanyStaus)
router.get("/universities",protect,adminOnly,allUniversities)
router.put("/university/:id",protect,adminOnly,updateUniversityStaus)
router.get("/dashboard",protect,adminDash)


module.exports = router
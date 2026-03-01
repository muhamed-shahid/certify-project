const express = require("express")
const { allCompanies, allUniversities,  adminDash, updateUniversityStatus, updateCompanyStatus } = require("../controllers/adminController")
const { protect, adminOnly } = require("../middleware/authMiddleware")
const router = express.Router()


router.get("/companies",protect,adminOnly,allCompanies)
router.put("/company/:id",protect,adminOnly,updateCompanyStatus)
router.get("/universities",protect,adminOnly,allUniversities)
router.put("/university/:id",protect,adminOnly,updateUniversityStatus)
router.get("/dashboard",protect,adminDash)


module.exports = router
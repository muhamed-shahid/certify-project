const express = require("express")
const { allCompanies, updateCompanyStaus, allUniversities, updateUniversityStaus } = require("../controllers/adminController")
const { protect, adminOnly } = require("../middleware/authMiddleware")
const router = express.Router()


router.get("/companies",protect,adminOnly,allCompanies)
router.put("/company/:id",protect,adminOnly,updateCompanyStaus)
router.get("/universities",protect,adminOnly,allUniversities)
router.put("/university/:id",protect,adminOnly,updateUniversityStaus)


module.exports = router
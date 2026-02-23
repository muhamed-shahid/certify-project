const express = require("express")
const router = express.Router()

const {verifyCertificate,revokeCertificate,allCertficates, addCertificate} = require("../controllers/certificateController")
const { protect } = require("../middleware/authMiddleware")

router.post("/verify", verifyCertificate)
router.put("/revoke/:id",revokeCertificate)
router.get("/",protect,allCertficates)
router.post("/add",protect,addCertificate)

module.exports = router
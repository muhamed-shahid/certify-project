const express = require("express")
const router = express.Router()

const {verifyCertificate,revokeCertificate,allCertficates, addCertificate} = require("../controllers/certificateController")

router.post("/verify", verifyCertificate)
router.put("/revoke/:id",revokeCertificate)
router.get("/",allCertficates)
router.post("/add",addCertificate)

module.exports = router
const express = require("express")
const router = express.Router()

const {verifyCertificate,revokeCertificate,allCertficates} = require("../controllers/certificateController")

router.post("/verify", verifyCertificate)
router.put("/revoke/:id",revokeCertificate)
router.get("/",allCertficates)

module.exports = router
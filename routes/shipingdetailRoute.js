const express = require("express");
const { getAllshipingDetail, createShippingDetails } = require("../controller/shipingdetailController");

const router = express.Router();


router.route("/shipingdetails").get(getAllshipingDetail);
router.route("/shipingdetails/new").post(createShippingDetails);

module.exports = router;
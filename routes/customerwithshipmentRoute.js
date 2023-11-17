const express = require("express");
const { getAllCustomerWithShippingDetails } = require("../controller/customerwithshipmentController");


const router = express.Router();


// customer route 
router.route("/customerwithshipment").get(getAllCustomerWithShippingDetails);


module.exports = router;
const express = require("express");
const { getAllCustomerWithPurchaseorder } = require("../controller/customerwithpurchaseorderController");


const router = express.Router();


// customer route 
router.route("/customerwithpurchaseorder").get(getAllCustomerWithPurchaseorder);


module.exports = router;
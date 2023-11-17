const express = require("express");
const { getCustomerWithPurchaseOrderAndShipment } = require("../controller/customerwith_purchaseorder_shipmentdetails_Controller");


const router = express.Router();


// customer route 
router.route("/withalldetails").get(getCustomerWithPurchaseOrderAndShipment);


module.exports = router;
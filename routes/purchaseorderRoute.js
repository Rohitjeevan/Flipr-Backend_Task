const express = require("express");
const {createPurchaseOrder,getAllPurchaseOrder}  = require("../controller/purchaseorderController");

const router = express.Router();


router.route("/purchaseorder").get(getAllPurchaseOrder);
router.route("/purchaseorder/new").post(createPurchaseOrder);


module.exports = router;
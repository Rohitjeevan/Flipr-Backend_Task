const express = require("express");
const { getAllCustomer,createCustomer, deleteCustomer } = require("../controller/customerController");


const router = express.Router();


// customer route 
router.route("/customer").get(getAllCustomer);
router.route("/customer/new").post(createCustomer);
router.route("/customer/:id").delete(deleteCustomer);




module.exports = router;
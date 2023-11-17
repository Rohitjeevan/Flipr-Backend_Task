const mongoose = require('mongoose');

const shippingDetailsSchema = new mongoose.Schema({
  address: {
    type: String,
    required: [true, "Please Enter the Address"],
  },
  city: {
    type: String,
    required: [true, "Please Enter the City"],
  },
  pincode: {
    type: String,
    required: [true, "Please Enter the Pincode"],
  },
  purchaseOrderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'PurchaseOrder', // Reference to the PurchaseOrder model
    required: [true, "Please provide a Purchase Order ID"],
  },
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer', // Reference to the Customer model
    required: [true, "Please provide a Customer ID"],
  },
});

const ShippingDetails = mongoose.model('ShippingDetails', shippingDetailsSchema);

module.exports = ShippingDetails;

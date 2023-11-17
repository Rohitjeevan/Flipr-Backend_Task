
const mongoose = require('mongoose');

const purchaseOrderSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: [true, "Please Enter the Product Name"],
  },
  quantity: {
    type: Number,
    required: [true, "Please Enter the Quantity"],
  },
  pricing: {
    type: Number,
    required: [true, "Please Enter the Pricing"],
  },
  mrp: {
    type: Number,
    required: [true, "Please Enter the MRP"],
  },
  purchaseOrderId: {
    type: mongoose.Schema.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId(), // Auto-generated unique ID
    unique: true,
  },
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer', // Reference to the Customer model
    required: [true, "Please provide a Customer ID"],
  },
});


const PurchaseOrder = mongoose.model('PurchaseOrder', purchaseOrderSchema);

module.exports = PurchaseOrder;

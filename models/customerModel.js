const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  customerName: {
    type: String,
    required: [true, "Please Enter the customer Name"],
  },
  email: {
    type: String,
    required: [true, "Please Enter the customer Email"],
    unique: true,
  },
  mobileNumber: {
    type: String,
    required: [true, "Please Enter the customer Mobile Number"],
  },
  city: {
    type: String,
    required: [true, "Please Enter the customer city"],
  },
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId(), // Auto-generated unique ID
    unique: true,
  },
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;

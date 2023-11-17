const Customer = require("../models/customerModel");
const ShippingDetails = require('../models/shipingdetailModel');

exports.getAllCustomerWithShippingDetails = async (req, res) => {
  const { city } = req.query;

  // Validate data
  if (!city) {
    return res.status(400).json({ error: 'City parameter is required' });
  }

  try {
    // Find shipment details for the specified city
    const shipmentsInCity = await ShippingDetails.find({ city: city });

    // If no shipments found for the given city, return an empty response
    if (shipmentsInCity.length === 0) {
      return res.status(404).json({ message: 'No shipments found for the given city' });
    }

    res.status(200).json({
      success: true,
      shipmentsInCity
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

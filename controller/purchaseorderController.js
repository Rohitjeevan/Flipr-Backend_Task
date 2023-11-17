
const PurchaseOrder = require("../models/purchaseOrderModel");


exports.getAllPurchaseOrder = async (req,res)=>{
    const purchaseOrder =  await PurchaseOrder.find();
    res.status(200).json({
        success:true,
         purchaseOrder
    })
}

exports.createPurchaseOrder = async (req, res, next) => {
    try {
        const { productName, quantity, pricing, mrp, customerId } = req.body;

        // Ensure Pricing is not greater than MRP
        if (pricing > mrp) {
            return res.status(400).json({
                success: false,
                error: 'Bad Request',
                message: 'Pricing cannot be greater than MRP.'
            });
        }

        // Create a new purchase order using the data from the request body
        const purchaseOrder = await PurchaseOrder.create(req.body);

        // Respond with a success message and the created purchase order
        res.status(201).json({
            success: true,
            purchaseOrder
        });
    } catch (error) {
        // Handle any errors that occur during the purchase order creation
        console.error('Error creating purchase order:', error.message);

        // Check for specific error types (e.g., validation errors)
        if (error.name === 'ValidationError') {
            res.status(400).json({
                success: false,
                error: error.message,
                message: error.message
            });
        } else {
            // Generic error response for other types of errors
            res.status(500).json({
                success: false,
                error: error.message,
                message: 'Something went wrong. Please try again later.'
            });
        }
    }
};
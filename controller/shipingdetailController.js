const ShippingDetails = require('../models/shipingdetailModel');



exports.createShippingDetails = async (req, res, next) => {
    try {
        const shippingDetail = await ShippingDetails.create(req.body);
        res.status(201).json({
            success: true,
            shippingDetail
        });

    } catch (error) {
        console.error('Error creating shipping details:', error.message);
        res.status(500).json({
            success: false,
            error: error.message,
            message: 'Something went wrong. Please try again later.'
        });
    }
};
exports.getAllshipingDetail =  async(req,res)=>{
      
    const shippingDetail =  await ShippingDetails.find();
    res.status(200).json({
        success:true,
         shippingDetail
    })
}
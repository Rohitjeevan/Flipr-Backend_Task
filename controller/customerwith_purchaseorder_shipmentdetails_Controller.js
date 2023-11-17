const Customer = require("../models/customerModel");
const PurchaseOrder = require("../models/purchaseOrderModel");
const ShippingDetail = require("../models/shipingdetailModel");



exports.getCustomerWithPurchaseOrderAndShipment = async (req, res) => {
  try {
    const result = await Customer.aggregate([
      {
        $lookup: {
          from: 'purchaseorders',
          localField: 'customerId',
          foreignField: 'customerId',
          as: 'purchaseOrders',
        },
      },
      {
        $lookup: {
          from: 'shippingdetails',
          localField: 'customerId',
          foreignField: 'customerId',
          as: 'shipmentDetails',
        },
      },
      {
        $project: {
          customerId: 1,
          customerName: 1,
          purchaseOrders: {
            $map: {
              input: '$purchaseOrders',
              as: 'order',
              in: {
                purchaseOrderId: '$$order.purchaseOrderId',
                productName: '$$order.productName',
                quantity: '$$order.quantity',
              },
            },
          },
          shipmentDetails: {
            $map: {
              input: '$shipmentDetails',
              as: 'shipment',
              in: {
                address: '$$shipment.address',
                city: '$$shipment.city',
                pincode: '$$shipment.pincode',
              },
            },
          },
        },
      },
    ]);

    res.status(200).json({
      success: true,
      result,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const Customer = require("../models/customerModel");
const PurchaseOrder = require("../models/purchaseOrderModel");

exports.getAllCustomerWithPurchaseorder = async (req, res) => {
  try {
    const customersWithPurchaseOrders = await Customer.aggregate([
      {
        $lookup: {
          from: 'purchaseorders', 
          localField: 'customerId',
          foreignField: 'customerId',
          as: 'purchaseOrders',
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
        },
      },
      {
        $match: {
          purchaseOrders: { $ne: [] }, // Filter out customers with empty purchaseOrders array
        },
      },
    ]);

    res.status(200).json({
      success: true,
      customersWithPurchaseOrders,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

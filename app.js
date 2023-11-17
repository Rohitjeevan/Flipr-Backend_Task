const  express = require("express")
const cors =  require("cors")
const app = express();

app.use(express.json());
app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods:["GET","POST","PUT","DELETE"],
    Credential:true
}))

//Route import  
const customer = require("./routes/customerRoute");
const purchaseorder = require("./routes/purchaseorderRoute");
const shipingDetail = require("./routes/shipingdetailRoute");
const shippingDetailwithcustomer = require("./routes/customerwithshipmentRoute");
const customerDetailwithpurchaseorder = require("./routes/customerwithpurchaseorderRoute");
const getAllDetails = require("./routes/customerwith_purchaseorder_shipmentdetails_Route");

app.use("/api/v1",customer); 
app.use("/api/v1",purchaseorder);
app.use("/api/v1",shipingDetail);
app.use("/api/v1",shippingDetailwithcustomer);
app.use("/api/v1/",customerDetailwithpurchaseorder);
app.use("/api/v1/",getAllDetails);




module.exports = app;
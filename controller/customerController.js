const Customer = require("../models/customerModel");



//create customer Admin -- only 


exports.createCustomer = async (req, res, next) => {
    try {
        // Check if a customer with the same email already exists
        const existingCustomer = await Customer.findOne({ email: req.body.email });

        if (existingCustomer) {
            // If a customer with the same email exists, respond with an error
            return res.status(409).json({
                success: false,
                error: 'Conflict',
                message: 'User with this email already exists.'
            });
        }

        // If no existing customer with the same email, create a new customer
        const customer = await Customer.create(req.body);

        // Respond with a success message and the created customer
        res.status(201).json({
            success: true,
            customer
        });
    } catch (error) {
        // Handle any errors that occur during the customer creation
        console.error('Error creating customer:', error.message);

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
                message: error.message
            });
        }
    }
};


// getAll customer 
exports.getAllCustomer = async(req,res)=>{

     const customer =  await Customer.find();

    res.status(200).json({
        success:true,
        customer })
}


// Delete a customer 
exports.deleteCustomer = async (req, res, next) => {
  
    console.log(req.params.id);

    try {
        // Check if the user with the given ID exists
        const user = await Customer.findById(req.params.id);

        if (!user) {
            // If user not found, respond with a 404 status
            return res.status(404).json({
                success: false,
                error: 'Not Found',
                message: 'User not found.'
            });
        }

        // If the user is found, delete the user
        await Customer.findByIdAndDelete(req.params.id);

        // Respond with a success message
        res.status(200).json({
            success: true,
            message: 'User deleted successfully.'
        });
    } catch (error) {
        // Handle any errors that occur during the deletion
        console.error('Error deleting user:', error.message);

        // Generic error response
        res.status(500).json({
            success: false,
            error: error.message,
            message: 'Something went wrong. Please try again later.'
        });
    }
};
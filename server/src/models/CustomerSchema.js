const mongoose = require('mongoose')

const CustomerSchema = new mongoose.Schema({
    customerID: { type: Number, required: true },
    customerName: { type: String, required: true },
    customerAddress: { type: String, required: true },
    customerContactNo: { type: String, required: true },
    customerEmail: { type: String, required: true }
}, {
    collection: 'customers'
})

const customerModel = mongoose.model('CustomerModel', CustomerSchema)

module.exports = customerModel

const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema({
    orderID: { type: Number, required: true, unique: true },
    customerName: { type: String, required: true },
    productName: { type: String, required: true },
    contactNo: { type: String, required: true },
    orderDate: { type: Date, required: true },
    orderPrice: { type: Number, required: true },
    orderQty: { type: Number, required: true },
    orderStatus: { type: String, required: true }
}, {
    collection: 'orders'
})

const orderModel = mongoose.model('OrderModel', OrderSchema)

module.exports = orderModel

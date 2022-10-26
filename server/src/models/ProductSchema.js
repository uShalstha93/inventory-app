const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    productID: { type: Number, required: true, unique: true },
    productName: { type: String, required: true },
    productCategory: { type: String, required: true },
    productQty: { type: Number, required: true },
    productPrice: { type: Number, required: true },
}, {
    collection: 'products'
})

const productModel = mongoose.model('ProductModel', ProductSchema)

module.exports = productModel
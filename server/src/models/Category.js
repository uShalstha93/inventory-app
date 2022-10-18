const mongoose = require('mongoose')

const CategorySchema = new mongoose.Schema({
    catID: { type: Number, required: true },
    catName: { type: String, required: true },
    catStatus: { type: String, required: true }
}, {
    collection: 'category'
})

const category = mongoose.model('CategoryModel', CategorySchema)

module.exports = category
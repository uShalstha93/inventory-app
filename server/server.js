const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const port = 2000

app.use(cors())
app.use(bodyParser.json())
const uri = 'mongodb://localhost:27017/InventoryDB'

const CategorySchema = new mongoose.Schema({
    catID: { type: Number, required: true },
    catName: { type: String, required: true },
    catStatus: { type: String, required: true }
}, {
    collection: 'category'
})
const category = mongoose.model('UserModel', CategorySchema)
// console.log(category)

const connect = async () => {
    try {
        mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log("Connected to MongoDB.")
    }
    catch (error) {
        console.error(error)
    }
}
connect();

app.listen(port, () => {
    console.log(`Inventory Server running at port ${port}`)
})

app.post('/category', async (req, res) => {
    try {
        category.create(req.body)
        res.json({
            message: "category successfully added!",
            categoryDetail: req.body
        })
    }
    catch (err) {
        console.log(err)
    }
})

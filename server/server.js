const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const port = 2000

app.use(cors())
app.use(bodyParser.json())
const uri = 'mongodb://localhost:27017/InventoryDB'

//category schema for mongodb
const CategorySchema = new mongoose.Schema({
    catID: { type: Number, required: true },
    catName: { type: String, required: true },
    catStatus: { type: String, required: true }
}, {
    collection: 'category'
})
const category = mongoose.model('InventoryModel', CategorySchema)
// console.log(category)

//mongodb connection function
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


//get method API
app.get('/category', async(req, res) => {
    try {
        category.find({})
        .then(result => {
            res.json({
                message: "Category List",
                detail: result
            })
        })
    }
    catch (err) {
        console.log(err)
        res.send({
            errorMsg: "Unable to get data!",
            errorDetail: err
        })
    }
})


//post method API
app.post('/category', async (req, res) => {
    try {
        // console.log(req.body)
        category.create(req.body)
        res.json({
            message: "category successfully added!",
            categoryDetail: req.body
        })
    }
    catch (err) {
        console.log(err)
        res.send({
            errorMsg: "Unable to post data in database!",
            errorDetail: err
        })
    }
})


//update method API
app.put('/category', async(req, res) => {
    try {
        category.findOneAndUpdate({ catID: req.body.catID }, {
            $set: { 
                catName: req.body.catName,
                catStatus: req.body.catStatus 
            }
        })
        .then(result => {
            res.json({
                message: "category info updated!!",
                categoryDetail: req.body
            })
        })
    }
    catch (err) {
        console.log(err)
        res.send({
            errorMsg: "Unable to update data!",
            errorDetail: err
        })
    }
})

const app = require('express')()
const cors = require('cors')
// const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require("dotenv").config()
const connectDB = require('./db/mongoose')()
const category = require('../src/models/Category')

app.use(cors())
app.use(bodyParser.json())
// const uri = 'mongodb://localhost:27017/InventoryDB'

//category schema for mongodb/category table
// const CategorySchema = new mongoose.Schema({
//     catID: { type: Number, required: true },
//     catName: { type: String, required: true },
//     catStatus: { type: String, required: true }
// }, {
//     collection: 'category'
// })

//creating inventoryModal
// const category = mongoose.model('InventoryModel', CategorySchema)
// console.log(category)

//mongodb connection function
// const connect = async () => {
//     try {
//         mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
//         console.log("Connected to MongoDB.")
//     }
//     catch (error) {
//         console.error(error)
//     }
// }
// connect();


app.listen(process.env.port, (err) => {
    if(err){
        return console.log("error", err)
    }
    console.log(`Inventory Server running at port ${process.env.port}`)
})


//get category method API
app.get('/category', async (req, res) => {
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


//post category method API
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


//update category method API
app.put('/category', async (req, res) => {
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


//Delete Category method API
app.delete('/category', async (req, res) => {
    try {
        category.deleteOne({ catID: req.body.catID })
            .then(result => {
                res.json({
                    message: "category deleted!!",
                    categoryDetail: req.body
                })
            })
    }
    catch (err) {
        console.log(err)
        res.send({
            errorMsg: "Unable to delete category",
            errorDetail: err
        })
    }
})

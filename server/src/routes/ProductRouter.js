const express = require('express')
const product = require('../models/ProductSchema')
const router = express.Router()

//get product api
router.get('/', (req, res) => {
    try {
        product.find({})
            .then(result => {
                res.json({
                    message: "Product List",
                    detail: result
                })
            })
    }
    catch (err) {
        console.log(err)
        res.send({
            errorMsg: "Unable To Get Products!",
            errorDetail: err
        })
    }
})

//post product api
router.post('/', async (req, res) => {
    try {
        // console.log(req.body)
        product.create(req.body)
        res.json({
            message: `${req.body.productName} - Product Added Successfully!!`,
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

//update product api
router.put('/', async (req, res) => {
    try {
        product.findOneAndUpdate({ productID: req.body.productID }, {
            $set: {
                productName: req.body.productName,
                productCategory: req.body.productCategory,
                productQty: req.body.productQty,
                productPrice: req.body.productPrice
            }
        })
            .then(result => {
                res.json({
                    message: "Product Info Updated Successfully!!",
                    productDetail: req.body
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

//delete product api
router.delete('/', async (req, res) => {
    try {
        product.deleteOne({ productID: req.body.productID })
        .then(result => {
            res.json({
                message: `Product Deleted Successfully!!`,
                productDetail: req.body
            })
        })
    }
    catch (err) {
        console.log(err)
        res.send({
            errorMsg: "Unable to Delete Product",
            errorDetail: err
        })
    }
})

module.exports = router

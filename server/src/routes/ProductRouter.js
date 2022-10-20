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
            message: "Product successfully added!",
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

module.exports = router

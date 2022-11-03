const express = require('express')
const order = require('../models/OrderSchema')
const router = express.Router()

//order get method api
router.get('/', (req, res) => {
    try {
        order.find({})
            .then(result => {
                res.json({
                    message: "Order List",
                    detail: result
                })
            })
    }
    catch (err) {
        console.log(err)
        res.send({
            errorMsg: "Unable To Get Orders!!",
            errorDetail: err
        })
    }
})

//order post method api
router.post('/', async (req, res) => {
    try {
        order.create(req.body)
        res.json({
            message: `Order Added Successfully!!`,
            orderDetail: req.body
        })
    }
    catch (err) {
        console.log(err)
        res.send({
            errorMsg: "Unable to post Order!!",
            errorDetail: err
        })
    }
})

module.exports = router

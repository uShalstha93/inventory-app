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

module.exports = router

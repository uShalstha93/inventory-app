const express = require('express')
const customer = require('../models/CustomerSchema')
const router = express.Router()

//get customer method API
router.get('/', async (req, res) => {
    try {
        customer.find({})
            .then(result => {
                res.json({
                    message: "Customers List",
                    detail: result
                })
            })
    }
    catch (err) {
        console.log(err)
        res.send({
            errrorMsg: "Unable to Fetch Customers!!",
            errorDetail: err
        })
    }
})

module.exports = router

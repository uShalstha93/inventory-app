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

//post customer method API
router.post('/', async (req, res) => {
    try {
        customer.create(req.body)
        res.json({
            message: `${req.body.customerName} - Customer Added Successfully!!`,
            customerDetail: req.body
        })
    }
    catch (err) {
        console.log(err)
        res.send({
            errorMsg: "Unable to Post Data in Database!!",
            errorDetail: err
        })
    }
})

//update customer method API
router.put('/', async (req, res) => {
    try {
        customer.findOneAndUpdate({ customerID: req.body.customerID }, {
            customerName: req.body.customerName,
            customerAddress: req.body.customerAddress,
            customerContactNo: req.body.customerContactNo,
            customerEmail: req.body.customerEmail
        })
            .then(result => {
                res.json({
                    message: "Customer Info Updated Successfully!!",
                    customerDetail: req.body
                })
            })
    }
    catch (err) {
        console.log(err)
        res.send({
            errorMsg: "Unable to Update Data!!",
            errorDetail: err
        })
    }
})

//Delete customer method API
router.delete('/', async (req, res) => {
    try {
        customer.deleteOne({ customerID: req.body.customerID })
        .then(result => {
            res.json({
                message: `Customer Deleted Successfully!!`,
                customerDetail: req.body
            })
        })
    }
    catch (err) {
        console.log(err)
        res.send({
            errorMsg: "Unable to Delete Customer",
            errorDetail: err
        })
    }
})

module.exports = router

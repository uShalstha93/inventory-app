const express = require('express')
// const app = express()
const category = require('../models/CategorySchema')
const router = express.Router()

//get category method API
router.get('/', async (req, res) => {
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
            errorMsg: "Unable To Get Category!",
            errorDetail: err
        })
    }
})

//post category method API
router.post('/', async (req, res) => {
    try {
        // console.log(req.body)
        category.create(req.body)
        res.json({
            message: `${req.body.catName} - Category Added Successfully!!`,
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
router.put('/', async (req, res) => {
    try {
        category.findOneAndUpdate({ catID: req.body.catID }, {
            $set: {
                catName: req.body.catName,
                catStatus: req.body.catStatus
            }
        })
            .then(result => {
                res.json({
                    message: `Category Info Updated Successfully!!`,
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
router.delete('/', async (req, res) => {
    try {
        category.deleteOne({ catID: req.body.catID })
            .then(result => {
                res.json({
                    message: `${req.body.catName} - Category Deleted Successfully!!`,
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


module.exports = router
const express = require('express')

const bcrypt = require('bcrypt')
const saltRounds = 10

const users = require('../models/UserSchema')

const router = express.Router()

//get user method api
router.get('/', async (req, res) => {
    try {
        users.find({})
            .then(result => [
                res.json({
                    message: "Users List",
                    detail: result
                })
            ])
    }
    catch (err) {
        console.log(err)
        res.send({
            errorMsg: "Unable to get users!",
            errorDetail: err
        })
    }
})

//post user method api
router.post('/', async (req, res) => {
    try {
        bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
            req.body['password'] = hash
            // console.log(req.body)
            users.create(req.body)
                .then((result) => {
                    res.json({
                        message: "user added!",
                        userDetail: result
                    })
                })
        })
        // res.json({
        //     message: "user successfully added!",
        //     userDetail: req.body
        // })
    }
    catch (err) {
        console.log(err)
        res.send({
            errorMsg: "Unable to post user data!",
            errorDetail: err
        })
    }
})

module.exports = router

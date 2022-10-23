const express = require('express')
const bcrypt = require('bcrypt')
const saltRounds = 10
const users = require('../models/UserSchema')
const router = express.Router()
const jwt = require('jsonwebtoken')

//get user method api
router.get('/users', async (req, res) => {
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
router.post('/register', async (req, res) => {
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

//post user login method api
router.post('/login', async (req, res) => {
    try {
        users.find({ userName: req.body.userName })
            .then(data => {
                if (data.length < 1) {
                    return res.json({
                        message: "User Not Found!"
                    })
                }
                const hashPassword = data[0].password
                bcrypt.compare(req.body.password, hashPassword, (err, result) => {
                    if (!result) {
                        return res.json({
                            message: "Password Didnot Match!"
                        })
                    }
                    if (result) {
                        const accessCode = jwt.sign({ userName: req.body.userName }, process.env.TOKEN, { expiresIn: '120s' })
                        users.findOneAndUpdate({ userName: req.body.userName }, {
                            $set: {
                                token: accessCode
                            }
                        })
                            // .then(localStorage.setItem("Token"))
                            .then(result => {
                                res.json({
                                    message: "Password Match!",
                                    _token: accessCode,
                                })
                            })
                    }
                })
            })
    }
    catch (err) {
        console.log(err)
        res.send({
            errorMsg: "Unable to get user data!",
            errorDetail: err
        })
    }
})

module.exports = router

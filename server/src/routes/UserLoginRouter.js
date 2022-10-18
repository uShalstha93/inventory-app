const express = require('express')

const bcrypt = require('bcrypt')

const users = require('../models/UserSchema')

const router = express.Router()

router.post('/', async (req, res) => {
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
                    else {
                        // console.log(result)
                        res.json({
                            message: "Password Matched!"
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

const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    userName: { type: String, required: true },
    fullName: { type: String, required: true },
    address: { type: String, required: true },
    contactno: { type: Number, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    token: { type: String }
}, {
    collection: 'users'
})

const userModel = mongoose.model('UserModel', UserSchema)

module.exports = userModel
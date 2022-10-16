const mongoose = require('mongoose')
const serverConfig = require('../../config/server-config.json')

const connectionString = serverConfig.mongodb_url
const connectdb = async () => {
    try {
        mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log("Connected to MongoDB.")
    }
    catch (error) {
        console.error(error)
    }
}

module.exports = connectdb
const app = require('express')()
const cors = require('cors')
const bodyParser = require('body-parser')
require('dotenv').config()
const connectDB = require('./db/mongoose')()
const CategoryRouter = require('../src/routes/CategoryRouter')
const UsersRouter = require('./routes/UserRouter')

app.use(cors())
app.use(bodyParser.json())

app.use('/', UsersRouter)
app.use('/category', CategoryRouter)

app.listen(process.env.port, (err) => {
    if (err) {
        return console.log("error", err)
    }
    console.log(`Inventory Server running at port ${process.env.port}`)
})


const app = require('express')()
const cors = require('cors')
const bodyParser = require('body-parser')
require('dotenv').config()
const connectDB = require('./db/mongoose')()

const CategoryRouter = require('../src/routes/CategoryRouter')
const UsersRouter = require('./routes/UserRouter')
const ProductRouter = require('./routes/ProductRouter')
const CustomerRouter = require('./routes/CustomerRouter')
const OrderRouter = require('./routes/OrderRouter')

app.use(cors())
app.use(bodyParser.json())

app.use('/', UsersRouter)
app.use('/category', CategoryRouter)
app.use('/products', ProductRouter)
app.use('/customers', CustomerRouter)
app.use('/orders', OrderRouter)

app.listen(process.env.port, (err) => {
    if (err) {
        return console.log("error", err)
    }
    console.log(`Inventory Server running at port ${process.env.port}`)
})


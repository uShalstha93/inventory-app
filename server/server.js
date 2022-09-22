const express = require('express')
const app = express()
const port = 2000

app.listen(port, () => {
    console.log(`Inventory Server running at port ${port}`)
})

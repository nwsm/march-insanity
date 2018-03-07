const express = require('express')
const cors = require('cors')
const path = require('path')    // <-- added
const config = require('./config/config')

const app = express()
app.use(cors())
app.use(express.static(path.join(__dirname, '../../client/dist')))    // <-- added

app.listen(config.port)
console.log(`Server started on port ${config.port}`)
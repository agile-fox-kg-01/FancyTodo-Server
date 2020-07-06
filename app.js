const express = require('express')
const router = require('./routes/')
const app = express()
app.use(express.urlencoded({ extended: true })) // x-www-form-urlencoded
app.use(express.json()) // filetype json
app.use('/', router)
const port = 3006
app.listen(port, () => console.log(`App listening at http://localhost:${port}`))
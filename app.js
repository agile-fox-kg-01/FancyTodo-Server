require('dotenv').config()

const express = require('express')
const routes = require('./routes/index')
const PORT = process.env.PORT
const errorHandler = require('./middlewares/errorHandler')

const app = express()

app.use(express.urlencoded({ extended:true }))
// app.use(express.json())

app.use('/', routes)
app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`running at port:${PORT}`)
})
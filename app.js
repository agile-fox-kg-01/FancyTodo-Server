const express = require('express')
const routes = require('./routes/index')
const PORT = 3000

const app = express()

app.use(express.urlencoded({ extended:true }))
// app.use(express.json())

app.use('/', routes)
app.listen(PORT, () => {
    console.log(`running at port:${PORT}`)
})
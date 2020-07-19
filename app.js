require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const index = require('./routes/index')
const errorHandler = require('./middlewares/errorHandler.js');
const cors = require('cors')


app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())
app.use('/', index)


app.use(errorHandler)
app.listen(port, () => {
  console.log(`running on port ${port}`);
})
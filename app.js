const dotenv = require('dotenv')
const myEnv = dotenv.config()
const express = require('express')
const router = require('./routes/')
const cors = require('cors')
const app = express()
const errorHandler = require('./midlewares/errorHandler')
app.use(express.urlencoded({ extended: true })) // x-www-form-urlencoded
app.use(express.json()) // filetype json
app.use(cors())
app.use('/', router)
app.use(errorHandler)
const port = process.env.PORT 
app.listen(port, () => console.log(`App listening at http://localhost:${port}`))
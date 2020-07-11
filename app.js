require('dotenv').config()

const cors = require('cors')
const express = require('express');
const app = express();
const PORT = 3000;
const router = require('./routes/index.js')
const {customErrorHandler} = require('./middleware/errorHandler.js')

app.use(express.urlencoded({extended: true}));
app.use(cors())
app.use('/', router)
app.use(customErrorHandler)

app.listen(PORT, ()=> {
    console.log(`Current PORT: ${PORT}`)
})
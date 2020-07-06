const express = require('express')
const app = express()
const port = 3000
const index = require('./routes/index')
const bcrypt = require('bcryptjs');

app.use(express.urlencoded({ extended: false }))
app.use('/', index)
app.use(express.json())


app.listen(port, () => {
  console.log(`running on port ${port}`);
})
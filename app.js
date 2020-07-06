const express = require('express');
const index = require('./routes/index.js');

const app = express();

const PORT = 3000;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/', index);

app.listen(PORT, () => {
    console.log(`Application is running at PORT http://localhost:${PORT}`);
})
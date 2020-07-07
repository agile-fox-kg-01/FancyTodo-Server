require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT;
const indexRoutes = require('./routes/index');
const errorHandler = require('./middlewares/errorHandler');

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/', indexRoutes);
app.use(errorHandler);

app.listen(PORT, () => console.log(`express on! in PORT: ${PORT}`));

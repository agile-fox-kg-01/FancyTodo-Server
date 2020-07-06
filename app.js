const express = require('express');
const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());
const PORT = 3000;

const indexRoutes = require('./routes/index');
app.use('/', indexRoutes);

app.listen(PORT, () => console.log(`express on! in PORT: ${PORT}`));

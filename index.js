const express = require('express');
const dbConnection = require('./config/config');
const routes = require('./routes/routeProduct');
require('dotenv').config();


 
const app = express();
const PORT= process.env.PORT || 3000;





app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/', routes);

dbConnection()






app.listen(PORT, () => {

    console.log(`Express esta escuchando en el puerto http://localhost:${PORT}`)



})


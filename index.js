const express = require('express')
const dbConnection = require('./config/config')
const app = express()
require('dotenv').config()


const PORT= process.env.PORT || 3000
const routes = require('./routes/routeProduct')




app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/', routes);


dbConnection()





app.listen(PORT, () => {

    console.log(`Express esta escuchando en el puerto http://localhost:${PORT}`)



})


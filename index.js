const express = require('express')
const dbConnection = require('./config/config')

const app = express()
require('dotenv').config()
PORT= process.env.PORT || 3000



app.get('/',(req, res) => (res.send('PROYECTO BACK')))



dbConnection()





app.listen(PORT, () => {

    console.log(`Express esta escuchando en el puerto http://localhost:${PORT}`)



})


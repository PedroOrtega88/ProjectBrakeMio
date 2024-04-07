const express = require ('express')
const router = express.Router()
const routeProduct = require ('../models/Products')


router.get('/',(req, res) => (res.send('estamos dentro de las rutas')))








module.exports = router;
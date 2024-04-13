const express = require ('express')
const router = express.Router()
const Products = require('../models/Products.js')
const ProductController= require('../controllers/ProductController')


router.post('/create', ProductController.create);







module.exports = router;
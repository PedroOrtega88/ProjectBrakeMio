const express = require ('express')
const router = express.Router()
const Products = require('../models/Products.js')
const ProductController= require('../controllers/ProductController')


router.post('/create', ProductController.create);
router.get('/products',ProductController.getAll);
router.get('/products/all',ProductController.getAllSSR);
router.get('/id/:_id', ProductController.getByID)






module.exports = router;
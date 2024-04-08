const Product = require('../models/Products');

 const ProductController = {
    async create (req, res)  {
    try {
        const { name, description, category, size, price } = req.body;
        const product = await Product.create({ name, description, category, size, price });
        res.status(201).json(product);
    } catch (error) {
        console.log(error)
    }
    },
 }

module.exports = ProductController;
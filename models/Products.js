const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: String,
    description: String,
    category: String,
    size: String,
    price: Number
});
const Products = mongoose.model ('Products', ProductSchema )
module.exports = Products 
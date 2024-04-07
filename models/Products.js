const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
    {    
        title: String,
        complete: Boolean
    },  { timestamps: true }
);

const Products = mongoose.model ('Products', ProductSchema )
module.exports = Products 
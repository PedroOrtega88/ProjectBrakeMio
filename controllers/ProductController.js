
const Products = require('../models/Products');


const ProductController ={
    async create (req,res){
        try{ const product= await Products.create({...req.body});
        res.status(201).send(product)

        }catch(error) {
            console.log(error);
      
        }

    }


}

module.exports = ProductController;
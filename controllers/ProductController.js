
const Products = require('../models/Products');


const ProductController ={
    async create (req,res){
        try{ const product= await Products.create({...req.body});
        res.status(201).send(product)

        }catch(error) {
            console.log(error);
      
        }

    },
    async getAll(req,res){

        try{
            const products = await Products.find();
            res.status(200).json(products);
        }catch(error){

            console.log(error)
        }
    
    }, async getAllSSR (req, res) {
        try {
            const products = await Products.find();
            res.send(`<h1>Tienda de ropa</h1>
              ${products.map(product => {
                return (
                    `<div>
                    <h2>Producto: ${product.name}</h2>
                    <p>Descripcion: ${product.description}</p>
                    <p>Categoría: ${product.category}</p>
                    <p>Talla: ${product.size}</p>
                    <p>Precio: ${product.price}</p>
                    <br> 
                </div>`
                )
              } ).join('')}
            </div>`);
        } catch (error) {
            console.log(error)
        }
      },async getByID (req,res){
        try{
            const id = req.params._id;
            const product = await Products.findById(id);
            if (!product) {
                return res.status(404).json({ error: 'Product not found' });
            }
            res.json(product);
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: 'Problem to search the product by ID' });
        }
    }, async updateByName(req, res) {
        try {
            const name = req.params.name;
            const newName = req.body.newName;
            const updatedProduct = await Products.findOneAndUpdate({ name }, { name: newName }, { new: true });
            if (!updatedProduct) {
                return res.status(404).json({ mensaje: 'Product not found' });
            }
            res.json(updatedProduct);
        } catch (error) {
            console.error('Error updating product by name:', error);
        }   
        },async updateByName(req, res) {
            try {
                const name = req.params.name;
                const newName = req.body.newName;
                const updatedProduct = await Products.findOneAndUpdate({ name }, { name: newName }, { new: true });
                if (!updatedProduct) {
                    return res.status(404).json({ mensaje: 'Product not found' });
                }
                res.json(updatedProduct);
            } catch (error) {
                console.error('Error updating product by name:', error);
              
            }
        },
    
        async deleteProduct(req, res) {
            try {
                const _id = req.params.id;
                const deletedProduct = await Products.findByIdAndDelete(_id);
                if (!deletedProduct) {
                    return res.status(404).json({ mensaje: 'Product not found' });
                }
                res.json({ mensaje: 'Product deleted', deletedProduct });
            } catch (error) {
                console.error('Error deleting product:', error);
                
            }
        },
    };
    
    module.exports = ProductController;


 




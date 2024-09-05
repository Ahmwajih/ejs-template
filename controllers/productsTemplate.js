// create product for ejs 

const Product = require('../models/product');

module.exports = {
    list: async (req, res) => {
        const data = await Product.find();
        res.render('products/index', { products: data });
    },

    create: (req, res) => {
        const data = req.body;
        const product = new Product(data);
        product.save();
        res.render('products/create');
    },

    update: async (req, res) => {
        const id = req.params.id;
        const data = await Product.findByIdAndUpdate(id, data);
        res.render('products/update');
    },

    delete: async (req, res) => {
        const id = req.params.id;
        const data = await Product.findByIdAndDelete(id)
        res.render('products/delete');
        }
    }
const mongoose = require('mongoose');

const productsSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    name: String,
    price: Number
});

const Products = mongoose.model('products', productsSchema);

module.exports = Products;
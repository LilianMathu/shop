const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productsSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    price: {
        type: Number,
        required: true
    }
});

const Products = mongoose.model('Products', productsSchema);

module.exports = Products;
const express = require('express');

const app = express();

const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');

// any request that starts with /products will be handled by the middleware below. 
// The middleware is passed the productRoutes variable which is required from the  products routes
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);


module.exports = app;

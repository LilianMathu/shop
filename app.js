const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false }));
app.use(morgan('dev'));


// any request that starts with /products will be handled by the middleware below. 
// The middleware is passed the productRoutes variable which is required from the  products routes
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);


// handling errors using the default Error object
// This middleware will handle all the errors related to the database, application
app.use((req, res, next)=> {
    const error = new Error('NOT FOUND');
    error.status = 404;
    next(error);
})

app.use((error, req, res, next)=>{
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
})

module.exports = app;

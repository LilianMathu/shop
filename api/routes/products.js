const express = require("express");
const router = express.Router();


// used where the mongoose model is instantiated
// const mongoose = require('mongoose');


// Require the database model
// const Products = require('../models/products');


router.post("/", (req, res, next) => {

  console.log("post product");
  // create a new product on the database
  const product = {
    name: req.body.name,
    price: req.body.price
  };
  res.status(201).json(product);

  // Save the new product to the database using save method provided by mongoose for use on mongoose models
//   product
//     .save()
//     .then(result => 
//       {
//         console.log(result)
//         res.status(200).json(result);
//       }
//     )
//   .catch(err => console.log(err));

  
});




// I have used '/' without the products since in the routes middleware in app.js is specified with a /products
router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "handling /GET requests to /products"
  });
});



router.get("/:productId", (req, res, next) => {
  //extract  the products id from the params
  const id = req.params.productId;
  if (id === "special") {
    res.status(200).json({
      message: "you discovered special Id",
      id
    });
  } else {
    res.status(200).json({
      message: "you passed an id"
    });
  }
});


router.patch("/:productId", (req, res, next) => {
  res.status(201).json({
    message: "This is an updated product"
  });
});


router.delete("/:productId", (req, res, next) => {
  res.status(200).json({
    message: "This is deleted product"
  });
});

module.exports = router;

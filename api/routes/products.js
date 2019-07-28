const express = require("express");
const router = express.Router();

// I have used '/' without the products since in the routes middleware in app.js is specified with a /products
router.get("/", (req, res, next) => {
  res.status(200).json({ 
    message: "handling /GET requests to /products" 
  });
});

router.post("/", (req, res, next) => {
  const product = {
    name: req.body.name,
    price: req.body.price
  }
  res.status(201).json({ 
    message: "handling /POST requests to /products",
    createdProduct: product
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


router.patch("/:productId", (req, res, next)=>{
    res.status(201).json({
        message: "This is an updated product"
    });
});


router.delete("/:productId", (req, res, next)=>{
   res.status(200).json({
    message: "This is deleted product"
   });
});

module.exports = router;

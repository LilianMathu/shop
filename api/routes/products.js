const express = require("express");
const router = express.Router();


// used where the mongoose model is instantiated
const mongoose = require('mongoose');


// Require the database model
const Products = require('../models/products');


router.post("/", (req, res, next) => {
  const product = new Products({
    _id: mongoose.Types.ObjectId(),
    name: req.body.name,
    price: req.body.price
  })
  // Save the new product to the database using save method provided by mongoose for use on mongoose models
  product
    .save()
    .then(result => {
      console.log(result)
      res.status(201).json({
        message: "product created successfully",
        createdProduct: result
      });
    }
    )
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });

});


// I have used '/' without the products since in the routes middleware in app.js is specified with a /products
router.get("/", (req, res, next) => {
  Products.find()
    .select('name price _id')
    .exec()
    .then(docs => {
      const response = {
        count: docs.length,
        products: docs.map(doc => {
          return {
            name: doc.name,
            price: doc.price,
            _id: doc._id,
            request: {
              type: 'GET',
              url: 'http://localhost:3000/products/' + doc._id
            }
          };
        })
      };
      res.status(200).json(response);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });

});



router.get("/:productId", (req, res, next) => {
  //extract  the products id from the params
  const id = req.params.productId;

  //use the Product model to acquire the product
  //findByID is a static method
  Products.findById(id)
    .exec()
    .then(doc => {
      if (doc) {
        console.log(doc);
        res.status(200).json(doc);
      } else {
        res.status(404).json({ message: "entry does not exist in database" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});


router.patch("/:productId", (req, res, next) => {
  const id = req.params.productId;
  const updateOps = {};
  for (const ops of req.body) {
    updateOps[ops.propName] = ops.value;
  }
  Products.update({ _id: id }, { $set: updateOps })
    .exec()
    .then(result => {
      console.log(result);
      res.status(200).json(result);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      })
    })
});


router.delete("/:productId", (req, res, next) => {
  const id = req.params.productId;
  Products.remove({ _id: id })
    .exec()
    .then(result => {
      console.log(result);
      res.status(200).json(result);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        message: "product not found",
        error: err
      });
    });
});

module.exports = router;

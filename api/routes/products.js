const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "handling /GET" });
});

router.post("/", (req, res) => {
  res.status(201).json({ message: "handling /POST" });
});

router.get("/:productId", (req, res) => {
  const id = req.params.productId;
  if (id === "special") {
    res.status(200).json({
      message: "you discovered special Id",
      id: id
    });
  } else {
    res.status(200).json({
      message: "you passed an id"
    });
  }
});


router.patch("/:productId", (req, res)=>{
    res.status(201).json({
        message: "This is an updated product"
    });
});


router.delete("/:productId", (req, res)=>{
   res.status(200).json({
    message: "This is deleted product"
   });
});

module.exports = router;

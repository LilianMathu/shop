const express = require("express");
const router = express.Router();

router.get("/", (req, res)=>{
    res.status(200).json({
        message: "orders "
    });
});

router.get("/:orderId", (req, res)=>{
    const id = req.params.orderID;
    res.status(200).json({
        message: "This is one order ",
        id
    });
});

router.post("/", (req, res)=>{
    res.status(201).json({
        message: "order was created "
    });
});

router.delete("/:orderId", (req, res)=>{
    const id = req.params.orderID;
    res.status(200).json({
        message: "Deleted one order ",
        id
    });
});

module.exports= router;
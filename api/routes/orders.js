const express = require("express");
const router = express.Router();

router.get("/", (req, res)=>{
    res.status(200).json({
        message: "orders "
    });
});

module.exports= router;
// const express = require('express');
const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
const port = process.env.port || 4000;
const app = require('./app');

// app.use(bodyParser.json());
// app.use(bodyParser({ urlencoded: false }));

// const db = require('./keys');
app.listen(port, function (){
    console.log(`listening on port: ${port}`);
});

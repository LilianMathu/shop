// const express = require('express');

// const app = express();

const port = process.env.port || 3000;
const app = require('./app');



app.listen(port, function (){
    console.log(`listening on port: ${port}`);
});

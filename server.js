// const mongoose = require('mongoose');
const port = process.env.port || 4000;
const app = require('./app');



// const db = require('./keys');
app.listen(port, function (){
    console.log(`listening on port: ${port}`);
});

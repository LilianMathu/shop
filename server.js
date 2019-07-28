const port = process.env.port || 4000;
const app = require('./app');

app.listen(port, function (){
    console.log(`listening on port: ${port}`);
});

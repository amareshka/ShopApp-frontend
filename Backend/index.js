const express = require('express');
const app = express();
const products = require('./products.json');

app.use(express.json());

const port = 5000;

app.get('/', (req,res) => {
    res.send("Welcome to onlne shop API..")
});

app.get('/products', (req,res) => {
    res.send(products);
})

app.listen(port, console.log(`We are ruuning on server at port: ${port}`));
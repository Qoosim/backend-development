const express = require('express')
const app = express()
const port = 3000

// root route
app.get('/', (req, res) => {
    res.send('Home Page')
})

// Get list of products
app.get('/products', (req, res) => {
    const products = [{id: 1, label: 'Product 1'}, {id: 2, label: 'Product 2'}, {id: 3, label: 'Product 3'}]
    res.send(products)
})

// Get a single product
app.get('/products/:id', (req, res) => {
    // console.log('Params: ', req.params);
    const productId = parseInt(req.params.id)
    console.log('Product Id: ', productId);
    const products = [{id: 1, label: 'Product 1'}, {id: 2, label: 'Product 2'}, {id: 3, label: 'Product 3'}]
    const singleProduct = products.find((product) => product.id === productId)
    if (singleProduct) {
        res.json(singleProduct)
    } else {
        res.status(404).send('Product id not found. Try with different id')
    }
})


app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})
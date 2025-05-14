const express = require('express')

const app = express()

// root route
app.get('/', (req, res) => {
    res.send('Welcome to the home page')
})
// Get list of products
app.get('/products', (req, res) => {
    const products = [{id: 1, label: 'Product 1'}, {id: 2, label: 'Product 2'},{id: 3, label: 'Product 3'}]
    res.json(products)
})

// Get a single product
app.get('/products/:id', (req, res) => {
    console.log('Params: ', req.params);
    
    const productId = parseInt(req.params.id)
    const products = [{id: 1, label: 'Product 1'}, {id: 2, label: 'Product 2'},{id: 3, label: 'Product 3'}]
    const singleProduct = products.find((product) => product.id === productId)
    if (singleProduct) {
        res.json(singleProduct)
    } else {
        res.status(404).send('Product not found, please try with different product id')
    }
})

const port = 3000
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
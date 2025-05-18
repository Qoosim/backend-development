const express = require('express')
const path = require('path')
const app = express()
const port = 3000

// Set view engine as ejs
app.set('view engine', 'ejs')

// set the directory for views
app.set('views', path.join(__dirname, 'views'))

const products = [
    {
        id: 1, 
        title: 'Product 1'
    },
    {
        id: 2,
        title: 'Product 2'
    },
    {
        id: 3,
        title: 'Product 3'
    }
]

app.get('/', (req, res) => {
    res.render('home', {title: 'Home', products: products})
})

app.get('/products/:id', (req, res) => {
    const productId = parseInt(req.params.id)
    const singleProduct = products.find((product) => product.id === productId)

    if (!singleProduct) {
        return res.status(404).send('Product not found')
    }
    res.render('product', { title: 'Single Product', singleProduct})
})

app.get('/about', (req, res) => {
    res.render('about', {title: 'About Page'})
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
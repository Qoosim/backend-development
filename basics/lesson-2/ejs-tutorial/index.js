const express = require('express')
const path = require('path')
const { title } = require('process')
const port = 3000

const app = express()

app.set('view engine', 'ejs')

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
    res.render('home', { title: 'Home Page', products})
})

app.get('/products/:id', (req, res) => {
    const productId = parseInt(req.params.id)
    const singleProduct = products.find((product) => product.id === productId)
    if(!singleProduct) {
        res.status(404).send('Product id not found!')
    }
    res.render('product', { title: 'Single Product', singleProduct})
})

app.get('/about', (req, res) => {
    res.render('about', { title: 'About Page'})
})

app.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact Page'})
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})
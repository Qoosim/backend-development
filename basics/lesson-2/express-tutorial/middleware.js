const express = require('express');
const app = express()
const port = 3000

const myMiddleware = (req, res, next) => {
    console.log('this first middleware runs at every request');
    // next()
}

app.use(myMiddleware)

app.get('/', (req, res) => {
    res.send('Home Page');
})

app.get('/about', (req, res) => {
    res.send('About Page')
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
const express = require('express')
const app = express();

// Application settings
app.set('view engine', 'ejs')

// Routing
app.get('/', (req, res) => {
    res.send('Home Page')
})

app.post('/api/data', (req, res) => {
    res.json({
        message: 'Data Received',
        data: req.body
    })
})

// Handling errors
app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).send('Something went wrong');
})

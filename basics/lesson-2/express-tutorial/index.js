const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Welcome to the express js lesson')
})

const port = 3000

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

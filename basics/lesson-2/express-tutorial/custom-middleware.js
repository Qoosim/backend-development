const express = require('express');
const app = express()
const port = 3000

const myCustmMiddleware = (req, res, next) => {
    const timeStamp = new Date().toISOString()
    console.log(`${timeStamp} from ${req.method} to ${req.url}`);
    next()
}
app.use(myCustmMiddleware);

app.get('/', (req, res) => {
    res.send('Home Page')
})

app.get('/about', (req, res) => {
    res.send('About Us Page')
})


app.listen(port, () => {
    console.log(`Serve is listening on port ${port}`);  
})
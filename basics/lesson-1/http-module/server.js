const http = require('http')

const server = http.createServer((req, res) => {
    console.log(req);
    res.writeHead(200, { 'Content-Type': 'text/plain'})
    res.end("Hello nodejs from http server")
})

const port = 3000;

server.listen(port, () => {
    console.log(`Server is now listening to port ${port}`);
})
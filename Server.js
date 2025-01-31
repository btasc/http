const http = require('http');

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        handleGet(req, res);
    } else {
        res.statusCode = 405;
        res.end('Method Not Allowed');
    }
});

const handleGet = (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ message: 'This is a GET request' }));
};

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
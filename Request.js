const http = require('http');

const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/',
    method: 'GET'
}

const req = http.request(options, res => {
    let data = '';

    res.on('data', chunk => {
        data += chunk;
    });
    res.on('end', () => {
        console.log(data);
    });
});

req.on('error', err => {
    console.log(err);
});

req.end();
const  http = require('http'),
        fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

function response(res, status, data) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(data);
}

const server = http.createServer((req, res) => {
    fs.readFile('test.txt', function(err, data) {
        try {
            if (err) throw 'No file found.';
            
            response(res, 200, data);
        } catch(e) {
            response(res, 200, e);
        }
    });
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
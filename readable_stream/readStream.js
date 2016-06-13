var http = require('http');
var fs = require('fs');
var oppressor = require('oppressor');

const hostname = '127.0.0.1';
const port = 3000;

function response(res, status, data) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(data);
}

const server = http.createServer((req, res) => {
    var readStream = fs.createReadStream('test.txt');
    readStream.pipe(oppressor(req)).pipe(req);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
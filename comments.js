// Create web server
// Create a web server that can listen to requests for /hello and responds with some HTML that says <h1>Hello World</h1>
// For an extra challenge, make the homepage (localhost:8080) display a file index that links to both hello and goodbye and returns the corresponding HTML files.

const http = require('http');
const fs = require('fs');
const port = 8080;

const server = http.createServer(function(req, res) {
    if (req.url === '/hello') {
        fs.readFile('./hello.html', 'utf8', function(err, data) {
            if (err) {
                res.writeHead(404);
                res.end('File not found');
            } else {
                res.writeHead(200, {
                    'Content-Type': 'text/html'
                });
                res.end(data);
            }
        });
    } else if (req.url === '/goodbye') {
        fs.readFile('./goodbye.html', 'utf8', function(err, data) {
            if (err) {
                res.writeHead(404);
                res.end('File not found');
            } else {
                res.writeHead(200, {
                    'Content-Type': 'text/html'
                });
                res.end(data);
            }
        });
    } else {
        res.writeHead(404);
        res.end('File not found');
    }
});

server.listen(port, function() {
    console.log(`Server listening on port ${port}`);
});
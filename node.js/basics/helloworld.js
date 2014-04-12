var http = require('http');

function hello_world_server (req, res) 
{
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n'+Date());
}

var server = http.createServer(hello_world_server)

server.listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');

var http = require('http');

function hello_world_server (req, res) 
{
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<b>Hello World</b>');
  res.write('<br><br>');
  res.end(Date());
}

var server = http.createServer(hello_world_server)

server.listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');

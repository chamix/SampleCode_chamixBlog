var http=require('http');

http.createServer(function(request, response){
	response.writeHead(200,{'Content-Type':'text/plain'});
	response.write('Chamix Blog - Node.js Web development - parte 1');
	response.end();
}).listen(3001);
console.log('Server listening http://localhost:3001');
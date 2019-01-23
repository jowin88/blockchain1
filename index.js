block = require('./block').block;
var http = require('http');
block = new block(1,2,3,4,5);
/*
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("<h1>The Block Chain Part 1</h1>");
  res.write("<br/>");
  //block = block();
  res.write("The date and time are currently: " + block(1,1,1,1,1).data);
  res.end();
}).listen(8080);
*/
console.log(block.hash);
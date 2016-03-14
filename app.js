var http = require("http");
var mysql      = require('mysql');

 var server = http.createServer(function(req, res) {
   res.writeHead(200);
   res.end('Hello Http');
 });
 server.listen(8080);


var connection = mysql.createConnection({
  host     : '54.169.37.202',
  user     : 'root',
  password : 'test',
  port     : '3306',
  database : 'test'
});

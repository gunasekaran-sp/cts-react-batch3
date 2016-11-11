/**
 * http://usejsdoc.org/
 */

var http = require('http');
var fs = require("fs");

var server = http.createServer();

server.on('request', function(req, res) {

	// res.writeHead(200, {
	// 'Content-Type' : 'text/plain'
	// });
	// res.write("Welcome to Node-world");
	// res.end();

	// ------------------------------------------

	// res.writeHead(200, {
	// 'Content-Type' : 'application/pdf'
	// });

	// 1.without-streams

	// fs.readFile('all-levels.pdf', function(err, data) {
	// res.write(data);
	// res.end();
	// });

	// ------------------------------------------

	// 2. with streams

	var rs = fs.createReadStream('all-levels.pdf');

	// rs.on('data', function(chunk) {
	// console.log(chunk.length);
	// res.write(chunk);
	// });
	//
	// rs.on('end', function() {
	// res.end();
	// });

	// or
	
	rs.pipe(res);

	// ------------------------------------------

	// heavy computation ( 10s )

	// for (var int = 0; int <1000000; int++) {
	// ///
	// }
	// res.write("done");
	// res.end();

	// --------------------------------------------

});

server.listen(3000, function() {
	console.log('server running on htpp://localhost:3000/');
});

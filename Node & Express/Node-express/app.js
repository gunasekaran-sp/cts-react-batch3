/**
 * http://usejsdoc.org/
 */

var express = require('express');
var app = express();

//app.get('/', function(req, res) {
//	res.sendFile(__dirname + "/public/index.html");
//});


app.use(express.static('public'));  // path : "/"


app.listen(3000, function() {
	console.log('listening at http://localhost:3000/');
});
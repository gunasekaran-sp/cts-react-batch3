var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var connection = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	password : 'root',
	database : 'pm'
});

// GET : /products
router.get('/', function(req, res, next) {
	connection.connect();
	connection.query('SELECT * FROM pm.PRODUCTS', function(err, rows, fields) {
		if (err) {
			throw err;
		}
		res.json(rows);
		connection.end();
	});
});

// POST : /products




module.exports = router;

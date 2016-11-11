/**
 * http://usejsdoc.org/
 */

var fs = require('fs');

fs.open('data.txt', 'r', function(err, fd) {

	var buffer = new Buffer(100000);

	fs.read(fd, buffer, 0, 100000, null, function(err, bytesRead, buffer) {
		var content = buffer.toString('utf8', 0, bytesRead);
		console.log(content);

		fs.close(fd, function() {
			console.log('file closed...');
		});

	});

});

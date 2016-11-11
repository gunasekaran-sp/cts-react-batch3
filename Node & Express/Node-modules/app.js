/**
 * http://usejsdoc.org/
 */

var fs = require('fs'); // Node's core module
var _ = require('underscore'); // third-party module
var greet = require('./greet'); // our module

// greet('es');

// var nums = [ 1, 2, 3, 4, 5 ];
// console.log(_.max(nums));

var util = {
	findMax : function(array) {
		return _.max(array);
	},
	findMin : function(array) {
		return _.min(array);
	}
};

module.exports = util;
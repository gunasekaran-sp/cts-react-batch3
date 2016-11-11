/**
 * http://usejsdoc.org/
 */

var en = require('./en');
var es = require('./es');

function greet(lang) {

	if (lang === 'en') {
		en();
		return;
	}
	if (lang === 'es') {
		es();
		return;
	}

	console.log('..');

}

module.exports = greet;
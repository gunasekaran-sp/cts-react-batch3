
// console.log('Hello...');

var en = require('./en');
var es = require('./es');

// var message = 'Hello..'

function greet(lang) {
    if (lang == 'en') {
        en();
    }
    if (lang == 'es') {
        es();
    }
}

// sayHello();
module.exports = greet;
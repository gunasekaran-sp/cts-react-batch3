/**
 * http://usejsdoc.org/
 */


var fs=require('fs');
var fd=fs.openSync('data.txt', 'r'); //...............
var contents=fs.readFileSync(fd, 'utf8');  //............................
console.log(contents);


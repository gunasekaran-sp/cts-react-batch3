
require('./styles.css');

// var Please = require('pleasejs');
import Please from 'pleasejs';

var section = document.getElementById('color');
var button = document.getElementById('button');

// function changeColor() {
//     section.style.backgroundColor = Please.make_color();
// }

debugger;
console.log('step-1');
console.log('step-2');
console.log('step-3');
console.log('step-4');


const changeColor = () => section.style.backgroundColor = Please.make_color();

button.addEventListener('click', changeColor);

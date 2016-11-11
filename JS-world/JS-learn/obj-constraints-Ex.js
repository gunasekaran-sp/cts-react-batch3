"use strict";

var person = {
    name: 'Nag',
    age: 32,
    sayName: function () {
        
    }
};


// Object.defineProperty(person, 'name', {configurable:false,writable:false});
// // delete person.name;
// // person.name = '';
// console.log(person.name);
// person.newProp = 'newValue';


// Object.preventExtensions(person);
// Object.seal(person);
// Object.freeze(person);  // Immutable objects


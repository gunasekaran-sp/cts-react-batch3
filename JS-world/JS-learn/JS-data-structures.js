

/*

    1. simple / primitives

       a. string
       b. number
       c. boolean
       d. null
       e. undefined

       f. symbol ( es6 )


    2. reference  ( objects)

*/


// How to create objs in JS-lang ?


/*

    var ref=new ConstructorFunction();

*/

// literal style objects


// 1. Object

var person = new Object();  // object-wrapper
person.name = 'Nag';
person.age = 32;
person.sayName = function () {
    console.log('im...');
}

// or - literal style

var newPerson = {
    name: 'Nag',
    age: 32,
    sayName: function () {
        console.log('im....');
    }
};

//--------------------------------------------

// 2. Array

var arr = new Array();

// or literal style

var newArr = [];

//--------------------------------------------

// 3. RegExp

var re = new RegExp('\\d{10}');

// or literal-style

var newRe = /\d{10}/;

//--------------------------------------------

// 4. Function

var add = new Function('n1', 'n2', 'var result=n1+n2;return result;');

// or literal-style

function newAdd(n1, n2) {
    var result = n1 + n2; return result;
}

//--------------------------------------------


// obj create-pattern

var o = { comp: 'CTS' };

var person = Object.create(o);
person.name = 'Nag';

//--------------------------------------------

// var p = { a: 10, display: function () { console.log(this.a) }};

// var q = Object.create(p);
// // q.a = 20;

// var r = Object.create(q);
// // r.a = 30;
// r.display=function () { console.log(this.a) }

// r.display();
// // p.display();

//--------------------------------------------

var person = {
    _name: 'Nag', // data property
    // accessor properties
    set name(newName) {
        if (newName) {
            this._name = newName
        }
    },
    get name() {
        return this._name;
    }
};

person.name = ''; // write
console.log(person.name); // Read

//--------------------------------------------


/*
        in JS ,

        --> functions are first-class citizens
        --> every func is an object.  
*/

//-----------------------------------------------------------------

// we create func objs in 2 ways

//-----------------------------------------------------------------

// 1. function declarations

/*
   --> function declarations always will get hoisted with function-object
   --> to create function-obj at context-creation phase.
   --> Named functions
*/

// console.log(add(12, 13));

// function add(n1, n2) {
//     return n1 + n2;
// }

// console.log(add(12,13));

//-----------------------------------------------------------------

// 2. function expressions

/*
    --> function expressions will not get hoisted with function-object
    --> to create func obj at context execution phase based on input/conditions.
    --> anonymous functions

*/

// console.log(add(12,13));

// var add = function (n1,n2) {
//     return n1 + n2;
// }

// console.log(add(12,13));

//-----------------------------------------------------------------



// functions as values

// function sayHello() {
//     console.log('Hello');
// }

// var sayHi = sayHello;

// sayHi();

//-----------------------------------------------------------------

// functions as arg

// function greet(f) {
//     if (f) {
//         f();
//         return;
//     }
//     console.log('hello..');
// }

// greet();
// greet(function () { console.log('ola...')});

// let nums = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10];
// //nums.sort();
// nums.sort(function (a, b) { return a - b; });
// console.log(nums);

//-----------------------------------------------------------------

// funcion as an return 

// function teach() {
//     console.log('teach...');
//     function learn() {
//         console.log('learn...');
//     }
//     return learn;
// }

// var learnFunc = teach();
// learnFunc();

//-----------------------------------------------------------------


// function reflect(a,b,c,d) {
//     console.dir(arguments);
//     return a;
// }

// console.log(reflect());

//-----------------------------------------------------------------


// // ES-5  , default func params

// function func(a,b) {
    
//     if (!a) {
//         a = 0;
//     }

//     b = b || 0;


// }

// func();


//-----------------------------------------------------------------

// ES-6  , default func params

// function func(a=0,b=0) {
   
// }

// func();

//-----------------------------------------------------------------


// spread operator with iteratable pbjects  ( e.g array , string , custom-iterable )


// let max = Math.max(12, 13, 25);
// let nums = [12, 13, 25];
// // let max = Math.max(nums[0],nums[1],nums[2]); // manual spread
// let max = Math.max(...nums);
// console.log(max);


// let a = [4, 5, 6]
// let str="ABC";
// let b = [0, 1, 2, 3, ...a, 7, 8, 9,...str];

//-----------------------------------------------------------------


// 'this'  keyword
//--------------------


// why  we need 'this' keyword ?

/*

  -->functions always read/wriute context or parent-context variables by default.
  --> to read/write obj's properties in a function , we need obj's reference


*/


// let person = {
//     pname: 'Nag',
//     sayName: function () {
//         console.log('im '+this.pname);
//     }
// };

// // person.sayName(); // new-execution-context

// var p = person;
// person = { pname: 'Ria' };

// p.sayName();

//----------------------------------------------------------------

/*

  this  --> owner of current execution-context

  how to indentify owner of context ?

  using invocation-pattern

  4 patterns

  1. function invocation ( this --> global-obj , context owned by global-obj )
  2. method invocation   ( this --> invoker-obj)
  3. call/apply/bind invocation ( this --> arg-obj )
  4. constructor invocation     ( this --> obj) 

*/


// var p1 = { name: 'Nag', sayName: function () { console.log('im ' + this.name); } };
// var p2 = { name: 'Ria', sayName: function () { console.log('im ' + this.name); } };


// var p1 = { name: 'Nag', sayName: sayNameForAll };  // static function binding
// var p2 = { name: 'Ria', sayName: sayNameForAll };

// sayNameForAll(); // im ??
// p1.sayName(); // im Nag
// p2.sayName(); // im Ria


//---------------------------------------------------------------




// var p1 = { name: 'Nag' };
// var p2 = { name: 'Ria' };


// var greetLib = {
//     sayName: function (message,from) {
//         console.log(message+' im '+this.name+" : "+from);
//     }
// };


// greetLib.sayName();


// dynamic function binding

// a. eager invocation

// greetLib.sayName.call(p1,"Hello","BLR");
// greetLib.sayName.call(p2,"Hi","CHN");

// greetLib.sayName.apply(p1,["Hello","BLR"]);
// greetLib.sayName.apply(p2,["Hi","CHN"]);

// b. lazy invocation ( onevent)

// var newF = greetLib.sayName.bind(p1, "Hello", "BLR");
// newF();

// var newF = greetLib.sayName.bind(p2);
// newF("Hi","CHN");

//----------------------------------------------------


// constructor function

function Person(name,age) {
    this.name = name;
    this.age = age;

    this.sayName = function () {
        console.log('im '+this.name);
    }
     this.sayAge = function () {
        console.log('im '+this.age+" old");
    }
}

var p1 = new Person('Nag', 32);
var p2 = new Person('Ria',1);


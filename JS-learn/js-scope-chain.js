

//-----------------------------------------------------------

// console.log(a);
// var a = 12;

//-----------------------------------------------------------

// var a = 12;

// function func() {
//     var a = 13;
//     console.log(a);
// }

// func(); // new-context  ----> global-context

//-----------------------------------------------------------

// var a = 12;
// function f1() {
//     function f2() {
//         console.log(a);
//     }
//     //f2(); // f2-context --> f1-context
//     var a = 13;
//     return f2;
// }

// var f2Func = f1();  // f1-context  --> global-context
// f2Func(); // f2-context --> f1-context


//-----------------------------------------------------------


// function func() {

//     {
//         //
//         var i = 100;
//     }

//     console.log(i);

// }

// func();

//-----------------------------------------------------------


// ES5 - limitations

/*

    --> variable hoisting
    --> no block-scoped variables

    soln:

    ES6

    keywords : let , const

*/



// console.log(productId);
// var productId = 10000;

// let productId = 10000;


//-----------------------------------------------------------


// let productId = 100;
// {
//     let productId = 200;
// }
// console.log(productId);

//-----------------------------------------------------------


// var updateFuncs = [];

// for (let i = 0; i < 2; i++){
//     updateFuncs.push(function () { return i});
// }

// console.log(updateFuncs[0]());

//-----------------------------------------------------------


// "use strict";

//var PI = 3.14;

// ES-5
//Object.defineProperty(window, 'PI', { writable: false });

// {
//     const PI = 3.14;
// }

// console.log(PI);

//-----------------------------------------------------------
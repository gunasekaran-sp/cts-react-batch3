

// var getPrice = function () {
//     return 5.99;
// }


// var getPrice = () => 5.99;
// console.log(typeof getPrice);


// var getPrice = count => count * 4.00;

// var getPrice = (count,tax) => count * 4.00 + tax;


// var getPrice = (count, tax) => { 
//     //...
//     return 100.00;
// };


// var nums = [1, 3, 5, 2, 4];
//nums.sort(function (a, b) { return a - b });
// nums((a, b) => { return a - b });

//---------------------------------------------------------

// why we need 'arrow' function ?


/*

  to execute piece of logic  using current-context as function

*/

// function Person(name, age) {
//     this.name = name;
//     this.age = age;

//     // var self = this;

//     // setInterval(function () { 
//     //     console.log(this);
//     //     self.age++;
//     //     console.log(self.age);
//     // },1000);

//     setInterval(() => { console.log(this); this.age++; console.log(this.age) }, 1000);

// }

// var p = new Person('Ria', 0);

//-------------------------------------------------------------


// var invoice = {
//     num: 123,
//     process: function () {
//         console.log(this);
//     }
// };

// invoice.process();

//--------------------------------------

// var invoice = {
//     num: 123,
//     process: () => { console.log(this)}
// };

// invoice.process();

//--------------------------------------

// var invoice = {
//     num: 123,
//     process: function () {
//         //console.log(this);
//         //return function () { console.log(this)};
//         return () => { console.log(this)}
//     }
// };

// var func = invoice.process();
// // func();

// var newInvoice = { num: 456 }
// func.call(newInvoice);

//--------------------------------------


// var f = () => { console.log('im back '); f() }

// f();


//--------------------------------------







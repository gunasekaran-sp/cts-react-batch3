

// ES-5

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
// Person.prototype.sayName = function () {
//     //..
// }
// Person.prototype.sayAge = function () {
//     //..
// }

//----------------------------------

// ES-6

class Person {

    constructor(name, age) {
        console.log('Person:constructor');
        this.name = name;
        this.age = age;
    }
    sayName() {
        //..
        console.log('im ' + this.name);
    }
    sayAge() {
        //..
    }


}

// console.log(typeof Person);
// var person = new Person('name', 10);
// console.log(typeof person);

// person.sayName();


// console.log(person.sayName===Person.prototype.sayName);


//-----------------------------------------



// var newClass = class Task { constructor() {
// console.log('constructing Task'); }
// };
// new newClass();


//-----------------------------------------


// function Task(name) {
//     console.log('constructing Task');
//     this.name = name;
// }

// class Task {
//     constructor(name) {
//         this.name = name;
//     }
// }

// let task = { id: 123 };

// Task.call(task, 'Task1');

// console.log(task);


//-----------------------------------------


class Project {
    constructor() {
        console.log('constructing Project');
    }
}

class SoftwareProject extends Project {
    constructor() {
        super();
        console.log('constructing SoftwareProject');
    }
} 

let p = new SoftwareProject();

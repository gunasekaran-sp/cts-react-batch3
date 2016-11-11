


// var ids = [1000, 2000, 3000];
// // console.log(typeof ids[Symbol.iterator]);

// // for (let id of ids) {
// //     console.log(id);
// // }

// let it = ids[Symbol.iterator]();
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());


//--------------------------------------

let idMaker = {
    [Symbol.iterator]() {
        let nextId = 8000;
        return {
            next() {
                let value = nextId > 8003 ? undefined : nextId++; let done = !value;
                return { value, done };
            }
        };
    }
};

// var it = idMaker[Symbol.iterator]();
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

// for (let v of idMaker) {
//     console.log(v);
// }

// function process(id1, id2, id3){
//     console.log(id1);
//     console.log(id2);
//     console.log(id3);
// } 


// process(...idMaker);


//-------------------------------

function* process() {
    let result = yield;
    console.log(`result is ${result}`);
}
let it = process();
it.next();
it.next(200);





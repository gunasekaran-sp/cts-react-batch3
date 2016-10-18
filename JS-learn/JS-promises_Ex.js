

// promises

/*

  by default every callback function will execute asynch after event.


  how to execute our functions asynchronously ?

   --> promise design-pattern


   Promise.all([promise1,promise2,promise3],function(results){

   });
   Promise.one([promise1,promise2,promise3],function(results){
       
   });



*/


// module : home
var home = {
    getFood: function () {
        var promise = new Promise(function (resolve, reject) {

            setTimeout(function () {
                console.log('home : food ready');
                resolve('FOOOOOD');
             },3000);
            
        });
        return promise;
    }
};


// module : trainer
var trainer = {
    doTeach: function () {
        console.log('teaching....');
        console.log('hungry...requesting food');
        var promise = home.getFood(); // asynch-call ( block current execution-context)
        promise.then(function (food) {
            console.log('yummy with ' + food);
        }, function (reason) {
            console.log('ooops. need to to go out');
        });
        console.log('got promise, deffering food result actions');
        console.log('finishing firther teaching.. if food comes ill have it later');
    }
};

trainer.doTeach();


function sessionStart() {
    
    function Trainer(name) {
        this.name = name,
            this.doTeach = function () {
                console.log(this.name + " teaching JS");
                var notes = "JS";
                var self = this;
                function learn() {
                    console.log(this.name + ' learning ' + notes + " from " + self.name);
                }
                return learn;
            }
    }
    
    var trainer = new Trainer('Nag');  // constructor invocation
    var learnFunc = trainer.doTeach(); // method invocation
   
    var emp1 = { name: 'Sanil' };
    var emp2 = { name: 'karthik' };

    learnFunc.call(emp1);  // call/apply/bind invocation
    learnFunc.call(emp2);

}

sessionStart(); // function invocation ( this --> global-obj )
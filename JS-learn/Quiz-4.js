

let tnr = { name: 'Nag' };

let tngService = {
    doTeach: function () {
        //console.log(this);
        console.log(this.name + " teaching JS");
    }
};


var teachBtn = document.getElementById('teachBtn');

//teachBtn.addEventListener('click',tngService.doTeach);

// way-1

// teachBtn.addEventListener('click', function () {
//     tngService.doTeach();
//  });

// way-2
teachBtn.addEventListener('click', tngService.doTeach.bind(tnr));


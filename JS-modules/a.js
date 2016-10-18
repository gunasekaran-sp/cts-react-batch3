

(function () {

    App.b.doWork();
    App.c.doWork();

    var o = {
        doWork: function () {
            console.log('A work...');
        }
    };

    App.a = o;

})();
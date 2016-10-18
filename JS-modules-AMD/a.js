
define('a', ['b','c'], function (bmod,cmod) {


    bmod.doWork();
    cmod.doWork();
    
    var o = {
        doWork: function () {
            console.log('A work...');
        }
    };

    return o;

});


function teach() {
    console.log('teaching JS...');
    var name = "Nag";  // Moved to heap-memory before context destroy
    setTimeout(function () {
        try {
            console.log('after timeout....');
            //throw new Error('ooops...');
            console.log(name +" back to next teach..");
        } catch (e) {
            console.log('i caught ' + e.message);
        }
    }, 3000);
    console.log('teaching finished....');
}

teach();
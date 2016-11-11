/**
 * http://usejsdoc.org/
 */

const EventEmitter = require('events');
const util=require('util');

//
//const ee = new EventEmitter();
//
//ee.on('some-event', function() {
//	console.log('some-event happnened....');
//});
//
//ee.emit('some-event');
//ee.emit('some-event');
//ee.emit('some-event');

//--------------------------------------------


function Door(){
	
	
	this.open=function(){
		console.log('door opened...');
		this.emit('open',{door:4,floor:2});
	};
	this.close=function(){
		console.log('door closed...');
		this.emit('close',{door:4,floor:2});
	};
	
}

util.inherits(Door, EventEmitter);

var door=new Door();


//---------------------------------------------

function Light(){
	
	this.setUp=function(){
		var self=this;
		door.on('open',function(event){
			self.lightOn();
		});
		door.on('close',function(event){
			self.lightOff();
		});
	};
	this.lightOn=function(){
		console.log('Light ON');
	};
	this.lightOff=function(){
		console.log('Light OFF');
	};
}

var light=new Light();
light.setUp();

//---------------------------------------------

setTimeout(function(){
	door.open();
}, 4000 );



setTimeout(function(){
	door.close();
}, 8000 );














/*

var events = require('events');
var eventEmitter = new events.EventEmitter();

var listerner1 = function listerner1 () {
    console.log("Listener 1 executed");
}

var listerner2 = function listerner2 () {
    console.log("Listener 2 executed");
}

eventEmitter.addListener('connection',listerner1);
eventEmitter.on('connection',listerner2);

var eventListener = events.EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListener + 'No. of listener is in execution');

eventEmitter.emit('connection');

eventEmitter.removeListener('connection',listerner1);
console.log("listener 1 was removed or nt listen now");

eventEmitter.emit('connection');


eventListener = events.EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListener + 'No. of listener is in execution');

console.log("program ended here");*/

var events = require('events');
var eventEmitter = new events.EventEmitter();

var listerner1 = function listerner1 () {
    console.log("Listener 1 executed");
}

var listerner2 = function listerner2 () {
    console.log("Listener 2 executed");
}

//eventEmitter.addListener('connection',listerner1);
eventEmitter.on('connection',listerner2);
eventEmitter.on('connection',listerner1);

var eventListener = events.EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListener + 'No. of listener is in execution');

eventEmitter.emit('connection');

eventEmitter.removeListener('connection',listerner1);
console.log("listener 1 was removed or nt listen now");

eventEmitter.emit('connection');


eventListener = events.EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListener + 'No. of listener is in execution');

console.log("program ended here");

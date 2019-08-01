var events = require('events');
var eventEmitter = new events.EventEmitter();

var myEventHandler = function () {
    console.log('I just Scream');
}
    eventEmitter.on('Scream',myEventHandler);
    eventEmitter.emit('Scream');


var sd = require('fs');

var readerStream = sd.createReadStream('input.txt');
var writerStream = sd.createWriteStream('output.txt');

readerStream.pipe(writerStream);
console.log('program ended');
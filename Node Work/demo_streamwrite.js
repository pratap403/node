var fs = require('fs');
var data = "Pratap";

var writerStream = fs.createWriteStream('output.txt');

writerStream.write(data, 'UTF-8');
writerStream.end();

writerStream.on('finish', function() {
    console.log('Write Finished');
});

writerStream.on('error', function(err) {
    console.log(err.stack);
});

console.log('program end');
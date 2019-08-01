var fs = require('fs');
var data = " ";

var readerStream = fs.createReadStream('newfile.txt');

readerStream.setEncoding("UTF-8");
readerStream.on('data', function(chunks) {
    data += chunks;
});
readerStream.on('end', function() {
    console.log(data);
});
readerStream.on('error', function(err) {
    console.log(err.stack);
});
console.log('Program Ended');
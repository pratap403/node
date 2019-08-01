var fs = require('fs');
var rs = fs.createReadStream('./wishlish.txt');

rs.on('open', function() {
    console.log('file is open');
});
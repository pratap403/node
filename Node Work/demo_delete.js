var dl = require('fs');

dl.unlink('wishlish1.txt',function(err, file) {
    if(err) throw err;
    console.log('file deleted');
});

var fs = require('fs');
var buf = new Buffer.alloc(1024);

fs.open('input.txt', 'r+', function(err, fd) {
    if(err)
        {return console.error(err);}
    console.log ('file is open');
    console.log ('file is ready to read');
    
    fs.read(fd, buf, 0, buf.length, 0, function(err, bytes) {
        if(err)
            {
            console.log(err);
            }
        console.log(bytes + "bytes read");
        
        if(bytes>0)
            {
                console.log(buf.slice(0, bytes).toString());
            }
    });
});

console.log('Program Ended');
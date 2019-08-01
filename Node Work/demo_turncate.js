var fs = require('fs');
var buf = new Buffer.alloc(1024);

console.log('going to open the file');

fs.open('input.txt', 'r+', function(err, fd) {
    if(err)
        {
            return console.error(err);
        }
    console.log('The file is successfully open');
    console.log('Now goin to turncate the file');
    
    fs.ftruncate(fd, 20, function(err) {
        if(err)
            {
                return console.error(err);
            }
        
        fs.read(fd, buf, 0, buf.length, 0, function(err, bytes) {
            if(err)
                {
                    return console.error(err);
                }
            console.log(bytes + "Bytes read");
            console.log("Read File successfully");
            console.log(" Now File content is ");
            
            if(bytes>0)
                {
                    console.log(buf.slice(0, bytes).toString());
                }
            fs.close(fd, function(err) {
                if(err) 
                    {
                        console.log(err);
                    }
            });
        });
    });
});
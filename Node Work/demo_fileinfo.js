var fs = require('fs');

console.log("there is some info aboout the file\n");
fs.stat('input.txt.gz', function(err, stats) {
    if(err) 
    {console.error(err);}
    console.log(stats);
    console.log('Got the file details');
    
    console.log("Is a file ?", stats.isFile());
    console.log("Is a directory ?", stats.isDirectory());
});

console.log("program ended");
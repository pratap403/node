var af = require('fs');

af.appendFile('wishlish.txt', '\n Wish me luck', function (err){
    if(err) throw err;
    console.log('saved');
});
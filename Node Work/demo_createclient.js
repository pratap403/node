var http = require('http');

// Option use by the request

var option = {
    host: 'localhost',
    port: '8080',
    path: '/index.htm'
};

// function used for the respone from the server
var callback = function (res) {
    var body = "";
    
    //continusly upade the stream data
    
    res.on('data', function(data) {
        body += data;
    });
    
    res.on('end', function() {
        console.log(body);
    });
}

var req = http.request(option, callback);
req.end();
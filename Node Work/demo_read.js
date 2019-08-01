var http = require('http');
var rf = require('fs');

http.createServer(function (req, res) {
    rf.readFile('mydemofile.html', function(err, data) {
    res.writeHead(200, {'Content-Type':'html/txt'});
    res.write(data);
    res.end();
    });
}).listen(8080);
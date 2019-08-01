var http = require('http');
var q = require('url');

http.createServer(function (req, res){
    res.writeHead(200,{'Content-Tpye':'txt/html'});
    var txt = q.parse(req.url, true).query;
    var txt1 = txt.year + " " + txt.month;
    res.end(txt1);
}).listen(8080);
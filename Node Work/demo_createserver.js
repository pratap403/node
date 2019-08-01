var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function (req, res) {
    
    // getting the path name
    var pathname = url.parse(req.url).pathname;
    
    console.log("Get the file" + pathname.substr(1));
    
    //read file
    
    //read the file content from the requested file 
    fs.readFile(pathname.substr(1), function(err, data) {
        if(err)
            {  
                console.log(err);
                //throw error 404
                //HTTP status 404 : File Not Found
                res.writeHead(404, {'Content-Type':'text/html'});
            }
        else{
            //File Found
            //HTTP status 200 : OK
            res.writeHead(200, {'Content-Type':'text/html'});
            
            //Return data of the file to the response header
            res.write(data.toString());
            res.end();
        }
    });
}).listen(8080);

console.log('Currently server running at localhost:8080');
var http = require('http');
var fs=require('fs');


var http= require('http');
var server =http.createServer(function(req,res){
    console.log("request was made"+req.url);
res.writeHead(200,{'Content-Type':'application/json'});
var myobj={
    name:'abhinav',
    job:'web dev',
    age:29
};
res.end(JSON.stringify(myobj));
});
server.listen(3000,'127.0.0.1');
console.log("listening to port 3000");
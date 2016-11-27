var http = require('http');
var path = require('path');
var fs = require('fs');
var bodyParser = require('body-parser');
var async = require('async');
var express = require('express');
var app = express();
var RESUME_FILE = path.join(__dirname, 'public/resume.json');
console.log(RESUME_FILE);
var server = http.createServer(app);
app.set('port', process.env.port||3000);
app.use('/', express.static(path.resolve(__dirname, "index.html")));
console.log(__dirname);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

app.get('/public/resume.json', function(req, res){
  fs.readFile(RESUME_FILE, function(err, data){
    if(err){
      console.error(err);
      process.exit(1);
    }
   
    res.json(JSON.parse(data));
  });
});

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("Chat server listening at", addr.address + ":" + addr.port);
});
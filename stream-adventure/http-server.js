var http = require('http');
var fs = require('fs');
var through = require('through2');
var stream = through(write, end);

function write (buf, _, next) {
	this.push(buf.toString().toUpperCase());
	next();
}

function end (done) { 
	done(); 
}

var server = http.createServer(function (req, res) {
    if (req.method === 'POST') {
        req.pipe(through(write, end)).pipe(res);
    } 
});
server.listen(process.argv[2]);
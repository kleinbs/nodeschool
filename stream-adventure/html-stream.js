var trumpet = require('trumpet');
var through = require('through2')
var fs = require('fs');
var tr = trumpet();

tr.pipe(process.stdout);

var ws = tr.select('.loud').createStream();
ws.pipe(through(function (buf, enc, next){
	this.push(buf.toString().toUpperCase());
	next();
})).pipe(ws);

process.stdin.pipe(tr)
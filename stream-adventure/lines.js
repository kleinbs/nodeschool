var through = require('through2');
var split = require('split');

var stream = through(write);
var flip = false;

function write(buffer, encoding, next){

	if(flip){
		this.push(buffer.toString().toUpperCase() + "\n");
		flip = false;
	} else {
		this.push(buffer.toString().toLowerCase() + "\n") ;
		flip = true;
	}
	next();
}

process.stdin.pipe(split()).pipe(stream).pipe(process.stdout);
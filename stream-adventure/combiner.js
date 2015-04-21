var combine = require('stream-combiner');
var through = require('through2');
var split = require('split');
var zlib = require('zlib');

module.exports = function () {

	var genre;

	function read(line, enc, next){
		if(line.toString() !== ''){
			var input = JSON.parse(line);
			if(input.type === 'genre'){
				if(genre){
					//console.log(JSON.stringify(genre) + '\n');
					this.push(JSON.stringify(genre) + '\n');
					genre = {};
				}
					genre = { name: input.name, books: []}
			}  
			else if(input.type === 'book'){
				genre.books.push(input.name);
			}	
		}
		next();
	}

	function end (done){
		if(genre){
			this.push(JSON.stringify(genre) + '\n')
		}
		done();
	}

    return combine(split(), through(read, end), zlib.createGzip())
}
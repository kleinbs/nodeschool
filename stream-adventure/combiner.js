var combine = require('stream-combiner');
var through = require('through2');
var split = require('split');
var zlib = require('zlib');

module.exports = function () {

	var genres
	var genre;
	var name;

	function read(line, encoding, next){
		if(line.toString() !== ''){
			var input = JSON.parse(line);
			//console.log(line.toString());
			if(input.type === 'genre'){
				//console.log(input.name)
				if(genres === undefined){
					if(genre !== undefined)
						genres = (JSON.stringify(genre)) + '\n';
					genre = {name: input.name, books: []}
				} 
				else{
					genres += (JSON.stringify(genre)) + '\n';
					genre = {name: input.name, books: []}
				}
			} 
			else if(input.type === 'book'){
				genre.books.push(input.name);
			}	
		}
		next();
	}

	function end (done){
		//console.log(genres);
		//genres.forEach( function(genre){
		return genres;
		//});
		done();
	}

    return combine(split(), through(read, end), zlib.createGzip(genres))
}
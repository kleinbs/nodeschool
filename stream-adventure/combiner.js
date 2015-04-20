var combine = require('stream-combiner');
var through = require('through2');
var split = require('split');
var zlib = require('zlib');

function isEmpty(obj){
    return (Object.getOwnPropertyNames(obj).length === 0);
}

module.exports = function () {

	var genres={};
	var name;

	function read(line, encoding, next){
		//if(!isEmpty(genres)){
			var input = JSON.parse(line);
			console.log(line.type);
			if(line.type === 'genre'){
				console.log(line.name)
			genres = {name: line.name, books: []}
			} else if(line.type === 'book'){
			genres.books.push(line.name);
			}		
		//}
		next();
	}

    return combine(split(), through(read), zlib.createGzip())
}
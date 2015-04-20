var spawn = require('child_process').spawn;
var duplex = require('duplexer2');

module.exports = function (counter) {

	var countryCount = {}

	var write = function(counter){
		counter
	}

	console.log(counter);
	console.log(process.stdin)
    // return a duplex stream to count countries on the writable side
    // and pass through `counter` on the readable side
    duplex(process.stdout, counter);
};
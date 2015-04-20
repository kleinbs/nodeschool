var duplexer = require('duplexer2');
var through = require('through2').obj;

module.exports = function (counter) {

	var countryCount = {};
	var writeable = through(write, end);

	return duplexer(writeable, counter);

	function write (buf, enc, next){
		if(countryCount[buf.country] == undefined){
			countryCount[buf.country] = 1
		} else {
			countryCount[buf.country] ++;
		}
		next();
	}
	function end (done){
		counter.setCounts(countryCount);
		done();
	}
}
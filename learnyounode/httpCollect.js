var bl = require('bl');
var http = require('http');

function sendRequest(URL){

	var req = http.get(URL, function(response){
		response.setEncoding('utf8');
		response.pipe(bl(function(err, data){
			console.log(data.length)
			console.log(data.toString());
			//callback(err, data);
		}))
	}).on('error', function(e){
			callback(error);
	});
}	

sendRequest(process.argv[2]);
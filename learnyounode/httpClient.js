var http = require('http');

function sendRequest(URL){

	var req = http.get(URL, function(response){
		response.setEncoding('utf8');

		response.on("data", function(chunk){
			console.log(chunk);
		})
		//console.log(response.message);
	
	}).on('error', function(e){
	console.log("Got Error: " + e.message)
	})

}

sendRequest(process.argv[2]);
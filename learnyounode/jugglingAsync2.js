var bl = require('bl');
var http = require('http');

var results = [];
var size = process.argv.length - 3;

for(var i = 0; i < process.argv.length - 2; i++){
	httpRequest(i);
}

function httpRequest(val){
	http.get(process.argv[val + 2], function(response){
	response.setEncoding('utf8');
	response.pipe(bl(function(err, data){
		results[val] = data.toString();
		if(size == 0){
			for(var j = 0; j < results.length; j++){
				console.log(results[j]);
			}	 
		} 
		else {
			size--;
		}
	}))
	});

}
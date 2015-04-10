var fs = require('fs');

var output;

function asyncRead(fileLocation){
	fs.readFile(fileLocation, 'utf8', function(err, data)
	{
		if(err)
			return(console.log("error"));

		var value = data.toString().split('\n'); 
		output = value.length;
		if(output > 0)
			output --;
		else
			output = 0;

		//console.log(output);

	});

}

//console.log(process.argv[2])

asyncRead(process.argv[2])

console.log(output);


var fs = require('fs');
var path = require('path');

function listFilesInDir(dir, fileType){
		fs.readdir(dir, function(err, data){
			for(i = 0; i < data.length; i++){
				if(path.extname(data[i]) == "." + fileType)
					console.log(data[i])
			}
		})
		
	}

listFilesInDir(process.argv[2], process.argv[3])


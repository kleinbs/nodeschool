var fs = require('fs');
var path = require('path');

module.exports = function(dir, fileType, callback){
		var filteredFiles = [];
		fs.readdir(dir, function(err, data){
			if(err){
				return callback(err);
			}
			
			for(i = 0; i < data.length; i++){
				if(path.extname(data[i]) === "." + fileType)
					filteredFiles[filteredFiles.length] = data[i];
			}
			return callback(null, filteredFiles);
		})
	};
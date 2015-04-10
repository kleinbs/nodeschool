var http = require('http');
var fs = require('fs');
var fileLocation = process.argv[3];

var server = http.createServer(function (req, res) {
  
  var readStream = fs.createReadStream(fileLocation);

  readStream.on('open', function(){
  	readStream.pipe(res);
  })
})

server.listen(process.argv[2])
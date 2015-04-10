var http = require('http');
var url = require('url');

var server = http.createServer(function (req, res) {
  	var urlObj = url.parse(req.url, true);
  	var pathName = urlObj.pathname;
  	var time = urlObj.query.iso;
  	var result;
  	console.log(pathName);

  	if(pathName === '/api/parsetime'){
  		result = timeObj(time);
  	} else if (pathName === '/api/unixtime'){
  		result = {unixtime: Date.parse(time)};
  	}

  	if(result){
  		res.end(JSON.stringify(result));
  	}
});

function timeObj(time){
	var date = new Date(Date.parse(time));

	return {
		hour: date.getHours(),
		minute: date.getMinutes(),
		second: date.getSeconds()
	}
}

server.listen(process.argv[2])
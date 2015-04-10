var net = require('net');

var server = net.createServer(function (socket) {

	var currentDate = new Date();
	var dateString 

	dateString = (currentDate.getFullYear()) 
	if(currentDate.getMonth() + 1 < 10)
		dateString += ("-" + "0" + (currentDate.getMonth() + 1)); 
	else
		dateString += ("-" + (currentDate.getMonth() + 1));
	if(currentDate.getDate() < 10)
	 	dateString += ("-" + "0" + currentDate.getDate() + " ") 
	else
		dateString += ("-" + currentDate.getDate() + " ") 
	currentDate + " "

	if(currentDate.getHours() < 10)
	 	dateString += ("0" + currentDate.getHours()) 
	else
		dateString += (currentDate.getHours()) 

	if(currentDate.getMinutes() < 10)
	 	dateString += (":" + "0" + currentDate.getMinutes()) 
	else
		dateString += (":" + currentDate.getMinutes()) 
	dateString +=  "\n";

	socket.write(dateString);
	socket.end();

})

server.listen(process.argv[2]);
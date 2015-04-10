var fs = require('fs');

var bf = fs.readFileSync(process.argv[2]);

var output = bf.toString().split('\n'); 

console.log(output.length - 1);
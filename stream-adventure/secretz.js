var tar = require('tar');
var crypto = require('crypto');
var zlib = require('zlib');
var through = require('through2')
var parser = tar.Parse();

var decrypt = crypto.createDecipher(process.argv[2], process.argv[3]);

parser.on('entry', function (entry) {

	if(entry.type !== 'File'){
		//console.log('hello')
		return
	}

	var path = " " + entry.path + '\n';
	var addHash = crypto.createHash('md5', { encoding: 'hex' });
	//console.log(addHash)
	var addPath = through(function(data, enc, next){
		this.push(data + path);
		next();
	})
	


	entry.pipe(addHash).pipe(addPath).pipe(process.stdout)//.pipe(+ " " + '\n')//.pipe(process.stdout);

});

process.stdin.pipe(decrypt).pipe(zlib.createGunzip()).pipe(parser)

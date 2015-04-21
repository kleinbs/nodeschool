var tar = require('tar');
var crypto = require('crypto');
var zlib = require('zlib');
var parser = tar.Parse();

var decrypt = crypto.createDecipher(process.argv[2], process.argv[3]);

parser.on('entry', function (e) {

	
	crypto.createHash
    return e;
});

process.stdin.pipe(decrypt).pipe(zlib.createGunzip()).pipe(process.stdout)

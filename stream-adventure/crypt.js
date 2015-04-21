var crypto = require('crypto');
var passcode = process.argv[2];
var stream = crypto.createDecipher('aes256', passcode);

process.stdin.pipe(stream).pipe(process.stdout)
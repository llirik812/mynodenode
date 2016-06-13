var fs = require('fs');

var tst = fs.createWriteStream('testable.txt');

tst.write('asdasda');

tst.end();
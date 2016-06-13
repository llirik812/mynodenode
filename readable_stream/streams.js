var stream = require('stream');
var rs = new stream.Readable();

var c = 97;
rs._read = function () {
    setTimeout(function() {
        if (c > 'c'.charCodeAt(0)) {
            rs.push(null);
        } else {
            rs.push(String.fromCharCode(c++));
        }
    },1000);
};

rs.pipe(process.stdout);

// Process events
process.on('exit', function() {
    console.log('\nExiting...');
});

process.on('error', function() {
    console.log('\nerror...');
});
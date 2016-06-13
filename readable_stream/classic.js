// используем классический подход к потокам в nodeJS
                 
var stream = new (require('stream'));
stream.readable = true;

var c = 64;
var iv = setInterval(function () {
    if (++c >= 75) {
        clearInterval(iv);
        stream.emit('end');
    }
    else stream.emit('data', String.fromCharCode(c));
	console.log(process.stdout._writableState.length);
}, 100);

stream.pipe(process.stdout);


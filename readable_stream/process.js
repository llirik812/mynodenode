// Start reading from stdin so we don't exit.
process.stdin.resume();

process.stdin.on('readable', function() {
	var data = process.stdin.read();
	console.log(data);
	
});

process.on('SIGINT', () => {
  console.log(process.versions);
  process.kill(process.pid);
});
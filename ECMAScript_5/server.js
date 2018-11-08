var deployd = require('deployd');

var server = deployd({
  port: process.env.PORT || 5000,
  env: process.env.ENVIRONMENT || 'development',
  db: {
    connectionString: 'mongodb://127.0.0.1:27017/ECMAScript_5'
  }
});

server.listen();

server.on('listening', function() {
  console.log("Server is listening");
});

server.on('error', function(err) {
  console.error(err);
  process.nextTick(function() { // Give the server a chance to return an error
    process.exit();
  });
});
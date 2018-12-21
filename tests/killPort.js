const kill = require('kill-port');
var http = require('http');

const port = normalizePort(process.env.PORT || '4000');
function normalizePort(val) {
    var port = parseInt(val, 10);
    kill(port).then(()=>{
        console.log(`${port}端口已被kill`);
    })
  
    if (isNaN(port)) {
      // named pipe
      return val;
    }
  
    if (port >= 0) {
      // port number
      return port;
    }
  
    return false;
  }
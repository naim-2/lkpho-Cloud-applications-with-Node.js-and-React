const http = require('http');
const today = require('./today');

const requestListener = function (req, res) {
  res.writeHead(200);
  let hr = today.getDate().getHours();
  let greet = "Early morning!"; 
  if(hr > 6 && hr < 12){
      greet = "Good morning!";      
  }
  else if(hr > 12 && hr < 18){
      greet = "Good afternoon";
  }
  else if(hr > 18 && hr < 21){
      greet = "Good evening";
  }
  else if(hr > 21 && hr < 24){
      greet = "Good night";
  }
  res.end(`Hello, ${greet}`);
}

const port = 8080;
const server = http.createServer(requestListener);
console.log('server listening on port: ' + port);
server.listen(port);

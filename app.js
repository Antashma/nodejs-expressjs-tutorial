const http = require('http');

const server = http.createServer((req, res) => {
  if(req.url === "/") res.end("Home Page");
  else if(req.url === "/about") res.end("About Us");
  else res.end("Error!")
});

server.listen(5000, () => {
  console.log('Server listening on port : 5000....');
});
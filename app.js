const http = require("http");
const fs = require("fs");

const PORT = 5000;

const server = http.createServer((req, res) => {
  if(req.url === "/") res.end("Home Page");
  else if(req.url === "/about") {
    //BLCOKING CODE!!!
    for (let i = 0; i < 500; i++) {
      for (let j = 0; j < 500; j++) {
        console.log(`${i} ${j}`)
        
      }
      
    }
    res.end("About Us")
  }
  else res.end("Error!")
});

server.listen(5000, () => {
  console.log('Server listening on port : 5000....');
});
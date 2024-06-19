const http = require("http");

const server = http.createServer((req, res) => {
    console.log(req);
    if (req.url  === "/") {
        res.end("Welcome to our homepage!");
    }
    else if (req.url === "/about") {
        res.end("Here is our short history.");
    } else {
       res.end(`
        <h1>Oops!</h1>
        <p>This page doesn't exist! Go <a href='/'>back home</a> and try again.</p>
    `); 
    }
    
})

server.listen(5000);
const http = require("http");
const fs = require("fs");

const PORT = 5000;

const server = http.createServer((req, res) => {

    // const text = fs.readFileSync("./content/big.txt", "utf8");
    // res.end(text);

    const streamText = fs.createReadStream("./content/big.txt", "utf8");
    
    streamText.on("open", () => {
        streamText.pipe(res)
    })

    streamText.on("error", (err) => {
        console.error(err);
        res.end(err);
    })


})

server.listen(PORT,  () => {
    console.log(`Server is listening on port ${PORT}`)
});
const { readFileSync, writeFileSync }  = require("fs");
console.log(">>> start!")
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

console.log({first, second})

writeFileSync("./content/result-sync.txt", 
    `Here is the is the result : ${first}, \r\n${second}`, 
    //{flag: 'a'}
);
const newFile = readFileSync("./content/result-sync.txt", "utf8")
console.log({newFile});

console.log(">>> done with this task!")
console.log(">>> starting the next task...")
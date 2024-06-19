const { readFile, writeFile }  = require("fs");

console.log(">>> start!");

readFile("./content/first.txt", "utf8", (err, result) => {
    if (err) {
        console.log(err);
        return;
    } 
    const first =  result;
    readFile("./content/second.txt", "utf8", (err, result) => {
        if (err) {
            console.log(err);
            return;
        } 
        const second =  result;
        writeFile("./content/third.txt", 
            `Love? What is love? Am I...love?\r\n${first}\r\n${second}`,
            (err) => {
                if (err) {
                    console.log(err);
                    return;
                } 
                console.log(">>> done with this task!")
        })
    })
    return;
})
console.log(">>> starting next task...")
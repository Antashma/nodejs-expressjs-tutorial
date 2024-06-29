const { writeFileSync } = require("fs")


for (let index = 0; index < 10000; index++) {
    
    writeFileSync("./content/big.txt",
        `${index}. hello world!\n`,
        {flag: 'a'}
    );
    
}
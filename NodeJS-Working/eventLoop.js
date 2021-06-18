// event loop in NodeJS

const fs = require('fs');
const crypto = require('crypto');

const start = Date.now();

setTimeout(() => console.log("Timer 1 finished"), 0);
setImmediate(() => console.log("Immediate 1 finished!"));
fs.readFile('read-file.txt', 'utf-8', (err, data) => {
    console.log();
    console.log(data);
    console.log("\n");
    console.log("IO Finished")
    console.log("-----------")

    // below are from event loop
    setTimeout(() => console.log("Timer 2 finished"), 0);
    setTimeout(() => console.log("Timer 3 finished"), 3000);
    setImmediate(() => console.log("Immediate 2 finished!"));
    // crypto.pbkdf2('password', 'salt', 10000, 1024, 'sha256', () => {
    //     console.log(Date.now() - start, "Password Encrypted");
    // })
});


console.log("Hello from top level code!");
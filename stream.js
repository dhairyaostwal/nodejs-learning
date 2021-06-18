const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
    // Solution 1
    // fs.readFile("read-file.txt", (err, data) => {
    //     if (err) console.log(err);
    //     res.end(data);
    // })
    // console.log()

    // Solution 2: Stream
    // const readable = fs.createReadStream("read-file.txt")
    // readable.on("data", chunk => {
    //     res.write(chunk);
    // })
    // readable.on("end", () => {
    //     res.end();
    // })
    // readable.on("error", err => {
    //     console.log(err);
    //     res.statusCode = 500;
    //     res.end("File not found"); // when no proper name of file
    // })


    // Solution 3: pipe()

    const readable = fs.createReadStream("read-file.txt")
    readable.pipe(res);
})

server.listen(8000, () => {
    console.log("Listening on port 8000...");
})


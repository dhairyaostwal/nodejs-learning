const eventEmitter = require('events');
const { EventEmitter } = require('stream');
const http = require('http');
const { url } = require('inspector');
class Sales extends EventEmitter {
    constructor() {
        super();
    }
}

const myEmitter = new EventEmitter();

myEmitter.on("carSale", () => {
    console.log("There is a car sale!");
})

myEmitter.on("carSale", () => {
    console.log("Customer name: Jonas");
})

myEmitter.on("carSale", stock => {
    console.log(`There are now ${stock} cars available for sale`);
})

myEmitter.emit("carSale", 9);

// ----------------------------

const server = http.createServer();

server.on('request', (req, res) => {
    console.log("Request Received!");
    console.log(req.url);
    res.end("Request Received");
})

server.on('request', (req, res) => {
    console.log("Another Request Received!");
})

server.on('close', () => {
    console.log("Server closed");
})

server.listen(8000, "127.0.0.1", () => {
    console.log("Waiting for response");
})


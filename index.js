// index.js - A simple Node.js server
const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello, Jenkins!");
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000/");
});

const http = require("http");
const hostname = "127.0.0.1";
const port = 3000;
const url= require("url");;

const server = http.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain; charse=utf8");
    res.
    
    const hello = {
    "pt": "Olá mundo!",
    "en": "Hello world!"
    };

    res.end(hello[req.url]);
});
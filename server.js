const http = require('http');
const hostname = '127.0.0.1';
const port = 8080;
var cowsay = require('cowsay');
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/txt');
    res.end(
        cowsay.say({
            text: "Esta es mi actividad de evaluacion!",
            e: "O0",
            T: "Q "
        })
    );

});

server.listen(port, hostname, () => {
    console.log('Server running at http://${hostname}:${port}');
});
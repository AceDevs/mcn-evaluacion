const express = require('express');
var cowsay = require('cowsay');

const hostname = '0.0.0.0';
const port = 8080;

const app = express();

app.get('/', function (req, res){
   res.send('GET request to the homepage'); 
});

app.post('/', function(req, res){
    res.send('POST request to the homepage');
});

app.post('/cowsaytest', function(req, res){
    res.send(cowsay.say({
        text: "Esta es mi actividad de evaluacion "
    }));
});

app.listen(port, hostname);
console.log('Running on http://');
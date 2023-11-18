var express = require('express');
var http = require('http');

var serverAddr = 'http://localhost:3001';

var app = express();

app.get('/fatorial', (req, res, next) => {
    var { n } = req.query;
    http.request(`${serverAddr}/fatorial?n=${n}`, (result) => {
        result.pipe(res);
    }).on('error', (e) => {
        res.sendStatus(500);
    })
    .end();
})

app.listen(3000, () => {
    console.log('cliente rodando na porta 3000');
});
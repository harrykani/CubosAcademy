const express = require('express');
const app = express();

let minutos = 0;
let segundos = 0;
let cronometroLigado;

const cronometro = () => {
    segundos ++;
    if (segundos > 59) {
        segundos = 0;
        minutos++;
    };
};

app.get('/', (req, res) => {
    res.send(`${String(minutos).padStart(2, 0)}:${String(segundos).padStart(2, 0)}`);
});

app.get('/start', (req, res) => {
    cronometroLigado = setInterval(cronometro, 1000);
    res.send(`Cronometro iniciado!`);
});

app.get('/pause', (req, res) => {
    clearInterval(cronometroLigado);
    res.send(`Cronometro pausado!`);
});

app.get('/resume', (req, res) => {
    cronometroLigado = setInterval(cronometro, 1000);
    res.send(`Cronometro continuado.`);
});

app.get('/reset', (req, res) => {
    minutos = 0;
    segundos = 0;
    res.send(`Cronometro zerado.`);
});

app.listen(8000);
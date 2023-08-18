const express = require('express')
const app = express();

const {turnoJogador, removerJogador} = require('./src/controllers/jogadores');

app.get('/', turnoJogador);

app.get('/remover', removerJogador);

app.listen(8000)
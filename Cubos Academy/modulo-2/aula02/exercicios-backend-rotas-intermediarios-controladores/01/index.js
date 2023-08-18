const express = require('express');
const numerosNecessarios = require('./src/middlewares/middleware');
const app = express();
const {somar, subtrair, multiplicar, dividir} = require('./src/controllers/operacoes')

app.use(numerosNecessarios);

app.get('/somar', somar)

app.get('/subtrair', subtrair)

app.get('/multiplicar', multiplicar)

app.get('/dividir', dividir)

app.listen(3000);
const express = require('express');
const app = express();

const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];
let indice = 0;

app.get('/', (req, ans) => {
    ans.send(`É a vez de ${jogadores[indice]} jogar!`);
    indice = (indice + 1) % jogadores.length;
});

app.listen(3000);

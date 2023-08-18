const jogadores = require('../../data.js');
let turno = 0;

const turnoJogador = (req, res) => {
    const nomeDoJogador = jogadores[turno]
    res.send(`É a vez de ${nomeDoJogador} jogar!`);
    turno = (turno + 1) % jogadores.length;
}

const removerJogador = (req, res) => {
    const {indice} = req.query;
    jogadores.splice(indice, 1)
    res.send(jogadores);
}

const adicionarJogador = (req, res) => {
    const {nome, indice} = req.query;
    jogadores.splice(indice, 1)
    res.send(jogadores);
}

module.exports = {
    turnoJogador, 
    removerJogador,
    adicionarJogador,
};
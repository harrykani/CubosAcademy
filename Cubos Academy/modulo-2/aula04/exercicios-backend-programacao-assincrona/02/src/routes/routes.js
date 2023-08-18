const express = require('express');
const { listagemPokemons, obterPokemon } = require('../controllers/controller.js');

const routes = express();

routes.get('/pokemon', listagemPokemons);

routes.get('/pokemon/:idOuNome', obterPokemon);

module.exports = routes;

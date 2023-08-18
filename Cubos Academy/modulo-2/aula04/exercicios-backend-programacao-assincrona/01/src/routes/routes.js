const express = require('express');
const { listarProdutos, buscarProduto, calcularFrete, } = require('../controllers/controller');
const routes = express();

routes.get('/produtos', listarProdutos);

routes.get('/produtos/:idProduto', buscarProduto);

routes.get('/produtos/:idProduto/frete/:cep', calcularFrete);


module.exports = routes;
const data = require('../bancodedados/produtos');
const { getStateFromZipcode } = require('utils-playground');

const listarProdutos = async (req, res) => {
    const result = await res.status(200).send(data);

    return result;
};

const buscarProduto = async (req, res) => {
    const { idProduto } = req.params;
    const result = await data.find((produto) => {
        return produto.id === Number(idProduto);
    });

    return res.status(200).send(result);
};

const calcularFrete = async (req, res) => {
    const { idProduto, cep } = req.params;

    const estado = await getStateFromZipcode(cep);

    const produto = await data.find((produto) => {
        return produto.id === Number(idProduto);
    });

    let porcentagem = 0;

    switch (estado) {
        case 'BA':
            porcentagem = 10;
            break;
        case 'SE':
            porcentagem = 10;
            break;
        case 'AL': 
            porcentagem = 10;
            break;
        case 'PE': 
            porcentagem = 10;
            break;
        case 'PB':
            porcentagem = 10;
            break;
        case 'SP': 
            porcentagem = 15;
            break;
        case 'RJ' :
            porcentagem = 15;
            break;
        default: 
            porcentagem = 12;
    }

    let frete =  produto.valor / porcentagem;

    const result = {
        produto,
        estado,
        frete
    }

    return res.status(200).send(result);
};


module.exports = {
    listarProdutos, buscarProduto, calcularFrete
}
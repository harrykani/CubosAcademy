const palavras = ["arroz", "feijão", "carne", "cerveja", "macarrão"];

const situacao = palavras.some((item) => {
    return item === 'cerveja' || item === 'vodka'
});

if (!situacao) {
    console.log('Tudo certo, vamos as compras!');
} else {
    console.log('revise sua lista, joão. possui bebida com venda proibida!');
};
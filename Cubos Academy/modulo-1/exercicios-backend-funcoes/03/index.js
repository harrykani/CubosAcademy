const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 1,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ],
    imprimirResumo: function () {

    nomearCliente();
    calcularTotalDeItens();
    calcularDesconto();
    resumoDoCarrinho();
    resetarValores();
    },
    addProduto: function (produto) {
        let produtoExiste = false;
        for (let produtoNoCarrinho in this.produtos) {
            if (this.produtos[produtoNoCarrinho].id === produto.id) {
                this.produtos[produtoNoCarrinho].qtd += produto.qtd
                produtoExiste = true;
                break
            }
        }
        if (!produtoExiste) {
            this.produtos.push(produto)
        }
    },
    imprimirDetalhes: function (carrinho) {
        nomearCliente();
        calcularTotalDeItens();
        calcularTotalAPagar();
        calcularDesconto();
        resumoDoCarrinho();
        resetarValores();
    },
}

let qtdTotal = 0;
let precoTotalCarrinho = 0;

function nomearCliente() {
    console.log(`Cliente: ${carrinho.nomeDoCliente}`);
}
function resumoDoCarrinho() {
    console.log(`Total de itens: ${qtdTotal} itens.`);
    console.log(`Total a pagar: R$ ${(precoTotalCarrinho / 100)},00.`);
}
function calcularTotalDeItens() {
    for (let produto in carrinho.produtos){
        qtdTotal += carrinho.produtos[produto].qtd;
        precoTotalCarrinho += carrinho.produtos[produto].precoUnit * carrinho.produtos[produto].qtd;
    }
}
function calcularTotalAPagar() {
    for (let produto in carrinho.produtos) {
            let totalProduto = carrinho.produtos[produto].precoUnit * carrinho.produtos[produto].qtd;
            console.log(`Item ${carrinho.produtos[produto].id}  - ${carrinho.produtos[produto].nome} - ${carrinho.produtos[produto].qtd} und - R$${(totalProduto/100).toFixed(2)}.`);
        }
}
function calcularDesconto() {
    if (qtdTotal > 4) {
        let menorPreco = Infinity
        for (let produto in carrinho.produtos)  {
            if (carrinho.produtos[produto].precoUnit < menorPreco){
                menorPreco = carrinho.produtos[produto].precoUnit;
            }
        }
        console.log(`O cliente comprou ${qtdTotal} itens e recebeu o desconto da nossa promoção!`);
        console.log(`O item mais barato, no valor de R$ ${(menorPreco/100).toFixed(2)}, sairá de graça.`);
    } else if (precoTotalCarrinho > 10000) {
        console.log(`O desconto foi de 10% e será de R$ ${((precoTotalCarrinho/10)/100).toFixed(2)}.`);
        precoTotalCarrinho -= precoTotalCarrinho / 10;
    }
}
function resetarValores() {
    qtdTotal = 0;
    precoTotalCarrinho = 0;
}

carrinho.addProduto({
    id: 1,
    nome: "Camisa",
    qtd: 1,
    precoUnit: 3000
});

console.log(carrinho.produtos);
carrinho.imprimirResumo();



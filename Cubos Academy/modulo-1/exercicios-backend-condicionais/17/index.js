//valor do produto comprado.
const valorDoProduto = 100000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 700;

let valorDaParcela = (valorDoProduto / quantidadeDoParcelamento) /100

let parcelasRestantes = (valorDoProduto/100 - valorPago)

parcelasRestantes /= valorDaParcela;

// console.log(valorDaParcela.toFixed(2))

console.log(`Restam ${parcelasRestantes} parcelas de R$ ${valorDaParcela.toFixed(2)}.`)

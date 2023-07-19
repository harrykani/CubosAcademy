//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "dinheiro";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;

if (tipoDePagamento == "credito") {
    let desconto = 5/100 
    let valorFinal = valorDoProduto - (valorDoProduto * desconto);
    valorFinal /= 100 
    console.log(`O valor a ser pago é de R$ ${valorFinal.toFixed(2)}`);
} else if (tipoDePagamento == "cheque") {
    let desconto = 3/100 
    let valorFinal = valorDoProduto - (valorDoProduto * desconto);
    valorFinal /= 100 
    console.log(`O valor a ser pago é de R$ ${valorFinal.toFixed(2)}`);
} else if (tipoDePagamento == "debito" || tipoDePagamento == "dinheiro") {
    let desconto = 10/100 
    let valorFinal = valorDoProduto - (valorDoProduto * desconto);
    valorFinal /= 100 
    console.log(`O valor a ser pago é de R$ ${valorFinal.toFixed(2)}`);
} else {
    console.log('Forma de pagamento não aceita.')
}
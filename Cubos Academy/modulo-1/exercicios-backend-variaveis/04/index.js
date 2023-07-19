let valorInicial = 7500;
let taxaDeJuros = 0.01;
let tempoEmDias = 37;

const valorTotal = valorInicial * ((1 + taxaDeJuros) ** tempoEmDias);

console.log(`O valor a ser pago é de ${valorTotal.toFixed(2)}.`);




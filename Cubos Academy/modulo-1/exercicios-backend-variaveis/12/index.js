const montante = 90000;
const capitalInicial = 60000;
const numeroDeMeses = 24;

let taxaDeJuros = ((montante / capitalInicial)**(1 / numeroDeMeses))- 1;
taxaDeJuros *= 100;

console.log(`O seu financiamento de ${capitalInicial} reais teve uma taxa de juros de ${taxaDeJuros.toFixed(3)}%, pois após ${numeroDeMeses} meses você teve que pagar ${montante} reais.`);
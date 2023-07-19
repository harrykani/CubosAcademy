const idade = 18;
const possuiPatologia = false;
const altura = 150;
const ehEstudante = false;

if (idade < 12 || idade > 65 || possuiPatologia || altura < 150) {
    console.log('ACESSO NEGADO')
} else if (idade < 18 || ehEstudante) {
    console.log('PAGUE 10 REAIS')
} else {
    console.log('PAGUE 20 REAIS');
}
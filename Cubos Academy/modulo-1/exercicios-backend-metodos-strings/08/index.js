const cpf = "011.022.033-44";
const cnpj = "01.022.033/0001-44";

// function removerPontuacao (text) {
//     let numeroLimpo = text.replace('/', '').replace('-', '').split('.');
//     numeroLimpo += '';
//     numeroLimpo = numeroLimpo.replaceAll(',', '');   
//     console.log(numeroLimpo);
// }

function removerPontuacao (text) {
    let numeroLimpo = text.replace('/', '').replace('-', '').replaceAll('.', '') ;
    console.log(numeroLimpo);
}

removerPontuacao(cpf);
removerPontuacao(cnpj);
let pesoEmKG = 98
let alturaEmMetros = 1.68

const IMC = pesoEmKG / (alturaEmMetros^2);

if(IMC < 17 ) {
    console.log(`Seu IMC é ${IMC.toFixed(2)}, você está muito abaixo do peso.`);
} else if ( IMC < 18.5 ) {
    console.log(`Seu IMC é ${IMC.toFixed(2)}, você está abaixo do peso.`);
} else if ( IMC < 25 ) {
    console.log(`Seu IMC é ${IMC.toFixed(2)}, você está no peso ideal.`);
} else if ( IMC < 30 ) {
    console.log(`Seu IMC é ${IMC.toFixed(2)}, você está acima do peso.`);
} else if ( IMC < 35 ) {
    console.log(`Seu IMC é ${IMC.toFixed(2)}, você está com obesidade grau I.`);
} else if ( IMC < 40 ) {
    console.log(`Seu IMC é ${IMC.toFixed(2)}, você está com obesidade grau II.`);
} else {
    console.log(`Seu IMC é ${IMC.toFixed(2)}, você está com obesidade grau III.`);
}
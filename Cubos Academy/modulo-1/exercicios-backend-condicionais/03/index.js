const ladoA = 3;
const ladoB = 3;

//seu código aqui
if (ladoA > 6 || ladoA < 0 || ladoB > 6 || ladoB < 0) {
    console.log(`Essa, peça não existe no dominó.`)
} else if (ladoA == ladoB) {
    console.log(`Sim, é uma bucha.`)
} else {
    console.log(`Não, não é uma bucha.`)
}
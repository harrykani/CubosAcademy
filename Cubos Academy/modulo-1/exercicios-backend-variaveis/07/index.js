let populacaoInicial = 1000
let expInfeccioso = 4
let tempoPercorrido = 7


const totalInfectado = populacaoInicial * expInfeccioso ** (tempoPercorrido / 7);

console.log(`O total de infectados é de ${totalInfectado.toFixed(2)} pessoas.`);
const original = [5, 7, 10, 13, 17, 21, 26, 34, 100, 118, 245];

const selecao = [];

for (let numero of original) {
    if (numero >= 10 && numero <= 20){
        selecao.push(numero);
    } else if (numero > 100) {
        selecao.push(numero);
    }
}

console.log(selecao)
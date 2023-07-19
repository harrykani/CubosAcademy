const numeros = [3, 4, 7, 8, 1, 6, 22, 10];
let somaDosPares = 0

for (let numero of numeros){
    if (numero % 2 === 0){
    somaDosPares += numero
    }
}

console.log(somaDosPares)
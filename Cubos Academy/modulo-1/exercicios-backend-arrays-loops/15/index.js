const original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = [];
const impares = [];

// for (let i = 0; i < original.length; i++) {
//     if (original[i] % 2 === 0) {
//         pares.push(original[i]);
//     } else {
//         impares.push(original[i])
//     }
// }

// for (let indice in original) {
//     const numero = original[indice]
//     if (numero % 2 === 0) {
//         pares.push(numero);
//     } else {
//         impares.push(numero);
//     }
// }

for (let numero of original) {
    if (numero % 2 === 0){
        pares.push(numero);
    } else {
        impares.push(numero);
    }
}



console.log(pares);
console.log(impares);
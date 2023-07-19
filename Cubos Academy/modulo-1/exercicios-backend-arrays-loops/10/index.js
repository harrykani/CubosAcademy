const numeros = [-8, 11, 4, 1];;

let maiorNumero = numeros[0];

let menorNumero = numeros[0];

for (i = 1; i < numeros.length; i++) {
    if (numeros[i] > maiorNumero) {
        maiorNumero = numeros[i];
    }
    if (numeros[i] < menorNumero) {
        menorNumero = numeros[i];
    }
}

console.log(maiorNumero - menorNumero);
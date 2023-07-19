const numeros = [54, 22, 10, 14, 87, 284];

let indice = -1

for (let numero in numeros) {
    if (numeros[numero] === 10){
        indice = numero
    }
}

console.log(indice);


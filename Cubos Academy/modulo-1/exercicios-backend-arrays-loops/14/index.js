const arrayA = [5, 32, 3, 44, 1];
const arrayB = [57, 4, 21, 2, 13];

let menorNumero = Infinity;

for (let i = 0; i < arrayA.length; i++) { 
    if (arrayA[i] < arrayB[i]) {
      menorNumero = arrayA[i];
    } else {
      menorNumero = arrayB[i];
    }
    console.log(menorNumero);
  }
const frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];

let novasFrutas = frutas.slice();

novasFrutas.reverse();

console.log(novasFrutas.join(', '));

frutas.shift();
frutas.pop();
frutas.push('Melão');

console.log(frutas);
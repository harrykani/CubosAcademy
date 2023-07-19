let raio = 3
let altura = 1

const areaTotal = (2 * (Math.PI * (raio ** 2))) + (2 * Math.PI *raio* altura);

console.log(`A área total do cilindro é de ${areaTotal.toFixed(2)}.`);
console.log(`A área total do cilindro é de ${areaTotal / Math.PI}PI.`);
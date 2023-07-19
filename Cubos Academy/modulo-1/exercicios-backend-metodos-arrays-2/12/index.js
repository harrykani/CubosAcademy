// const pessoas = [
//     {
//       nome: "Antonio",
//       idade: 30,
//       profissao: "Jornalista",
//     },
//     {
//       nome: "Maria",
//       idade: 30,
//       profissao: "Jornalista",
//     },
//     {
//       nome: "Ana",
//       idade: 21,
//       profissao: "Programador",
//     },
//     {
//       nome: "Beatriz",
//       idade: 20,
//       profissao: "Programador",
//     },
//     {
//       nome: "José",
//       idade: 32,
//       profissao: "Jornalista",
//     },
//     {
//       nome: "Marcos",
//       idade: 30,
//       profissao: "Programador",
//     },
//   ];

// const programadores = pessoas.filter((pessoa) => {
//     return pessoa.profissao.toLowerCase() === 'programador' && pessoa.idade > 20;
// });

// const jornalistas = pessoas.filter((pessoa) => {
//     return pessoa.profissao.toLowerCase() === 'jornalista' && pessoa.idade > 30;
// })

// const jovens = pessoas.filter((pessoa) => {
//     return pessoa.idade < 30;
// })

// console.log(programadores);
// console.log(jornalistas);
// console.log(jovens);


const input = '3\n0 0\n0 3\n4 0'

const arrayDeStrings = input.trim().split('\n');
const inteiroN = arrayDeStrings.shift();
let arrayInt = [];
let distanciaMaxima = 0;
    
for (i in arrayDeStrings) {
  const [x, y] = arrayDeStrings[i].split(' ').map(parseFloat); 
  arrayInt.push({ x, y });
}

console.log(arrayInt);
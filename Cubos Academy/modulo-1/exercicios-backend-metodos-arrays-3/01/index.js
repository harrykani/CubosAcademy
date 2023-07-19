const numeros = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2];


// a) Ordenar o array em ordem crescente.
const numerosOrdemCrescente = numeros.slice();

numerosOrdemCrescente.sort((a, b) => {
    return a - b;
});

console.log(numerosOrdemCrescente);

// b) Ordenar o array em ordem decrescente.

const numerosOrdemDecrescente = numeros.slice();

numerosOrdemDecrescente.sort((a, b) => {
    return b - a;
});

console.log(numerosOrdemDecrescente);

// c) Ordenar o array em ordem crescente, com base nos valores dos pontos de código Unicode.

const numerosOrdemUnicode = numeros.slice();

numerosOrdemUnicode.sort();

console.log(numerosOrdemUnicode);

// d) Ordenar o array abaixo em ordem alfabética.

const frutas = ["Banana", "Amora", "abacaxi", "uva", "Pera"];

const frutasOrdemAlfabetica = frutas.slice();

frutasOrdemAlfabetica.sort((a, b) => {
    // codigo aqui
    return a.localeCompare(b);
});

console.log(frutasOrdemAlfabetica);

// e) Ordenar o array em ordem alfabética decrescente.

const frutasOrdemAlfabeticaDec = frutas.slice();

frutasOrdemAlfabeticaDec.sort((a, b) => {
    return b.localeCompare(a)
});

console.log(frutasOrdemAlfabeticaDec);

// f) Ordenar o array em ordem crescente, de acordo com a quantidade de caracters (do que tem menos caracteres, para o que tem mais).

const frutasOrdemDeTamanho = frutas.slice();

frutasOrdemDeTamanho.sort((a, b) => {
    return a.length - b.length;
});

console.log(frutasOrdemDeTamanho);


// Exercicio resolvido 2
/*
const carros = [
    { nome: 'corola', marca: 'toyota', ano: '2020', cor: 'prata'},
    { nome: 'argo', marca: 'fiat', ano: '2021', cor: 'preto'},
    { nome: 'ranger', marca: 'ford', ano: '2021', cor: 'prata'},
    { nome: 'hilux', marca: 'toyota', ano: '2018', cor: 'branco'}
];

const ordenarCarros = (array, campo) => {
    array.sort((itemA, itemB) => {
        return itemA[campo].localeCompare(itemB[campo]);
    });
    console.log(array);
};

ordenarCarros(carros, 'nome');
ordenarCarros(carros, 'marca');
ordenarCarros(carros, 'ano');
ordenarCarros(carros, 'cor');
*/

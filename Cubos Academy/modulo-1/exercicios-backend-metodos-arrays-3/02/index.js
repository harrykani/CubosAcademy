const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
];

const maiorString = cidades.reduce((acumulador, cidade) => {

    if (acumulador.length < cidade.length){
        acumulador = cidade;
    }

    return acumulador
});

console.log(maiorString);

const endereços = [
    { cep: 00111222, rua: "Rua dos Artistas" },
    { cep: 00111333, rua: "Rua Augusta" },
    { cep: 00222444, rua: "Avenida Paralela" },
    { cep: 11222333, rua: "Rua Carlos Gomes" },
  ];


function encontrarEndereco (cep) {
const endDesejado =  endereços.find((endereco) => {
    return endereco.cep === cep;
})

console.log(endDesejado.rua);
};

encontrarEndereco(endereços[3].cep);
const usuarios = [
    {
        nome: "João",
        pets: ["Max"],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
];

function encontrarDonoDoPet (pet){
    let donoEncontrado = false;
    for (const usuario of usuarios){
       if (usuario.pets.includes(pet)){
        console.log(`O dono(a) do(a) ${pet} é o(a) ${usuario.nome}`);
        donoEncontrado = true
       }
    }
    if (!donoEncontrado){
        console.log(`Que pena ${pet}, não conseguimos encontrar o(a) seu dono(a).`);
    }
}

encontrarDonoDoPet('Lulu');
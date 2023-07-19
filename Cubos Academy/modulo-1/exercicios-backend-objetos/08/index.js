const usuarios = [
    {
        nome: "João",
        pets: [],
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

for (let i=0; i < usuarios.length; i++) {
    const usuario = usuarios[i]
    if (usuario.pets.length < 1) {
        console.log(`Sou ${usuario.nome} e não tenho pets`);
    } else if (usuario.pets.length == 1) {
        console.log(`Sou ${usuario.nome} e  tenho 1 pet`);
    } else {
        console.log(`Sou ${usuario.nome} e tenho ${usuario.pets.length} pets`);
    }
}

const usuarios = [
    {
        nome: "João",
        idade: 25,
    },
    {
        nome: "Ana",
        idade: 18,
    },
    {
        nome: "Beatriz",
        idade: 15,
    },
    {
        nome: "Carlos",
        idade: 16,
    },
    {
        nome: "Antonio",
        idade: 32,
    },
];

const jovens = [];
const adultos = [];

for (i=0; i < usuarios.length; i++){
    const usuario = usuarios[i];
    if (usuario.idade < 18){
        jovens.push(usuario);
    } else {
        adultos.push(usuario)
    }
}

console.log(jovens, adultos);

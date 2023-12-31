const usuários = [
    {
      nome: "André",
      idade: 29,
      habilitado: false,
    },
    {
      nome: "Marcos",
      idade: 70,
      habilitado: true,
    },
    {
      nome: "Ana",
      idade: 35,
      habilitado: true,
    },
    {
      nome: "Vinícius",
      idade: 44,
      habilitado: true,
    },
    {
      nome: "Carlos",
      idade: 17,
      habilitado: false,
    },
    {
      nome: "Maria",
      idade: 19,
      habilitado: true,
    },
  ];

const usuariosMaioresDeIdade = usuários.filter((usuario) => {
    return usuario.idade >= 18 && usuario.idade <= 65;
});

const usuariosHabilitados = usuariosMaioresDeIdade.every((usuario) => {
    return usuario.habilitado;
});

if (usuariosHabilitados) {
    console.log('todos passaram no teste');
} else {
    console.log('todos precisam estar habilitados');
}
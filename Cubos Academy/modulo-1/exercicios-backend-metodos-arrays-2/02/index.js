const palavras = ["livro", "canta", "sol", "carro", "olha"];

const resultado = palavras.some((valor) => {
    return valor.length > 5
});

if (resultado) { 
    console.log('existe palavra inválida');
} else {
    console.log('array válido');
}
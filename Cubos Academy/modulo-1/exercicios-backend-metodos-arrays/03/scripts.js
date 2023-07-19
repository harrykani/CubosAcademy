const nomes = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia'];
const posicao = 3;

function encontrarCarro (lista, posicao) {
    console.log(`${lista.slice(posicao, (posicao+3)).join(' - ')}`);
}

encontrarCarro(nomes, posicao);
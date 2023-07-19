const numeroCartao = '1111222233334444';

function esconderNumeroCartao (numero) {
    let numeroApresentado = `${numero.slice(0,4)}${numero.slice(12).padStart(15, '****')}`;
    console.log(numeroApresentado)
}

esconderNumeroCartao(numeroCartao);


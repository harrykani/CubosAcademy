const filaDeDentro = ["Jose", "Maria", "Joao"];
const filaDeFora = ["Joana", "Roberta", "Marcos", "Felipe"];



while (filaDeFora.length > 0 && filaDeDentro.length < 6) {
    console.log(`Na fila de dentro estão: ${filaDeDentro}`);
    console.log(`Na fila de fora estão: ${filaDeFora}`);
    filaDeDentro.push(filaDeFora.shift());
    if (filaDeDentro.length === 5) {
        console.log(`Na fila de dentro estão: ${filaDeDentro}`);
        console.log(`Na fila de fora estão: ${filaDeFora}`);
        filaDeDentro.shift();
    }
}



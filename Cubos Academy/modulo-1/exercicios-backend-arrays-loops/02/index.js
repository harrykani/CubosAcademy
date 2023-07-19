const letras = ["A", "a", "B", "C", "E", "e", "E" , "E", 'r', "O", 'l', 'g', 'a'];
let quantidade = 0 


for (let i = 0; i < letras.length; i++) {
    if (letras[i] === "e" || letras[i] === "E"){
        quantidade++;
    }
}

console.log(`O array tem ${quantidade} letras 'E' ou 'e'.`);

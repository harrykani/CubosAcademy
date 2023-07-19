const nomes = ["Astrid", "Olga", "Antonio", "Marcos"];
const nomesComecadosEmA = []

for (let nome of nomes){
    if (nome[0] === 'A' || nome[0] === 'a'){
        nomesComecadosEmA.push(nome)
    }
}

console.log(nomesComecadosEmA)

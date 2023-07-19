const original = [1, 4, 12, 21, 53, 88, 112];
const selecao = []

for (let numero in original) {
    if (original[numero] % 2 === 0){
        selecao.push(original[numero])
    }
}

console.log(selecao)
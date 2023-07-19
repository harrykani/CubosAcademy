const nomes = ['Juninho', 'Vidal', 'Guido', 'Dani', 'Ruli', 'Diego'];
const tamanhoDoGrupo = 4;

function separadorDeGrupos(lista, tamanho) {
    let numeroDoGrupo = 1
    for (let i=0; i < lista.length; i+=tamanho){
        const grupo = `Grupo ${numeroDoGrupo}:, ${lista.slice(i, (i+tamanho)).join(', ')}`;
        console.log(grupo);
        numeroDoGrupo++;
    }
}
 
separadorDeGrupos(nomes, tamanhoDoGrupo);
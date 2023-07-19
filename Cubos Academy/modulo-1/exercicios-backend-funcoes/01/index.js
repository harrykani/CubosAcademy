const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
};

function corrigirProva(prova) {
    let acertos = 0;
    for (let questao in prova.questoes) { 
        if (prova.questoes[questao].resposta === prova.questoes[questao].correta) {
            acertos ++
        }
    }
    const nota = (prova.valor / prova.questoes.length) * acertos;
    console.log(`O aluno(a) ${prova.aluno} acertou ${acertos} questões e obteve nota ${nota}.`)
}
    
corrigirProva(prova);
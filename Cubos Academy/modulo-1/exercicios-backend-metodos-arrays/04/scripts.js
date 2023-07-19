const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

function atendimentoClinico (lista, operacao, nome) {
    if (operacao == 'atender'){
        lista.shift();
        console.log(lista.join(', '));
    } else if (operacao == 'agendar' && nome == undefined){
        console.log('Insira o nome do paciente a ser agendado');
    } else if (operacao == 'agendar'){
        lista.push(nome);
        console.log(lista.join(', '));
    }
}

atendimentoClinico(pacientes, 'atender');
atendimentoClinico(pacientes, 'agendar');
atendimentoClinico(pacientes, 'agendar', 'Lucas');
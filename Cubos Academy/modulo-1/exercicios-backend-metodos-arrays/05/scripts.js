const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

function agendarPaciente (lista, paciente){
    lista.push(paciente);
    imprimirListaDePacientes();
}

function atenderPaciente(lista){
    lista.shift();
    imprimirListaDePacientes();
}

function cancelarAtendimento(lista, paciente){
    for (let i in lista){
        if(lista[i] === paciente) {
            lista.splice(i, 1);
        }
    }
    imprimirListaDePacientes();
}

function imprimirListaDePacientes (){
    console.log(pacientes.join(', '));
}

agendarPaciente(pacientes, 'Lucas');
agendarPaciente(pacientes, 'Roberto');
atenderPaciente(pacientes);
cancelarAtendimento(pacientes, 'Joana');
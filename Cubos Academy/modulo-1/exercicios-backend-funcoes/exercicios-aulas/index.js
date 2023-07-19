const pessoa1 = {
    nome: 'Emanuel',
    idade : 20,
    profissao: 'vendedor',
    altura: '1.78',
    faixaEtaria: '',
    determinarFaixaEtaria: function () {
        if (this.idade < 25) {
            return this.faixaEtaria = 'jovem'
        }  else if (this.idade < 65) {
            return this.faixaEtaria = 'adulto'
        } else {
            return this.faixaEtaria = 'idoso'
        }
    }
}
const pessoa2 = {
    nome: 'Micaela',
    idade : 36,
    profissao: 'jornalista',
    altura: '1.58'
}
const pessoa3 = {
    nome: 'Reginaldo',
    idade : 66,
    profissao: 'bombeiro',
    altura: '1.88'
}

function apresentacao (pessoa) {
    console.log(`Olá! Meu nome é ${pessoa.nome}, sou um ${pessoa.faixaEtaria} de ${pessoa.idade} anos, ${pessoa.altura}m de altura e sou ${pessoa.profissao}.`);
}

// const textoApresentacao = (pessoa) => {
//     let grupoEtario = ''

//     if (pessoa.idade < 25) {
//         grupoEtario = 'jovem'
//     }  else if (pessoa.idade < 65) {
//         grupoEtario = 'adulto'
//     } else {
//         grupoEtario = 'idoso'
//     }

//     console.log(`Olá! Meu nome é ${pessoa.nome}, sou um ${grupoEtario} de ${pessoa.idade} anos, ${pessoa.altura}m de altura e sou ${pessoa.profissao}.`);
// }

pessoa1.determinarFaixaEtaria(); 
apresentacao(pessoa1);

const contaBancaria = {
    nome: "Olga",
    saldo: 0,
    historicos: [],
    depositar: function (valorDepositado) {
        this.saldo += valorDepositado;
        this.historicos.push({
            tipo: "Depósito",
            valor: valorDepositado
        })
        console.log(`Deposito de R$${(valorDepositado/100).toFixed(2)} realizado para o cliente: ${contaBancaria.nome}`);
    },
    sacar: function (valorSacado) {
        if (valorSacado <= this.saldo){
        this.saldo -= valorSacado;
        this.historicos.push({
            tipo: "Saque",
            valor: valorSacado
        })
        console.log(`Saque de R$${(valorSacado/100).toFixed(2)} realizado para o cliente: ${contaBancaria.nome}`);
        } else {
            console.log(`Saldo insuficiente para o saque de: ${this.nome}`);
        }
    },
    extrato: function() {
        console.log(`Extrato de ${this.nome} - Saldo: R$${(this.saldo/100).toFixed(2)}`);
        console.log(`Histórico:`);
        gerarHistorico();
    }
};

function gerarHistorico() {
    for (let historico in contaBancaria.historicos){
        console.log(`${contaBancaria.historicos[historico].tipo} de R$${(contaBancaria.historicos[historico].valor/100).toFixed(2)}`);
    }
}

contaBancaria.depositar(100000000);
contaBancaria.sacar(50000);
contaBancaria.extrato();


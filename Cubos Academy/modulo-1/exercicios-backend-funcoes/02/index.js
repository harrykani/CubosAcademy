const carro = {
    ligado: false,
    velocidade: 0,
    ligar: function (){
        if (!this.ligado) {
            this.ligado = true;
            console.log(`Carro ligado. Velocidade: ${carro.velocidade}.`);
        } else {
            console.log('Este carro já está ligado.')
        }
    },
    desligar: function (){
        if (this.ligado) {
            this.ligado = false;
            this.velocidade = 0;
            console.log(`Carro desligado. Velocidade: ${carro.velocidade}.`);
        } else {
            console.log('Este carro já está desligado.')
        }
    },
    acelerar: function (){
        if (this.ligado) {
            this.velocidade += 10;
            console.log(`Carro ligado. Velocidade: ${carro.velocidade}.`);
        } else {
            console.log('Não é possivel acelerar um carro desligado.')
        }
    },
    desacelerar: function (){
        if (this.ligado && this.velocidade >= 10) {
            this.velocidade -= 10;
            console.log(`Carro ligado. Velocidade: ${carro.velocidade}.`);
        } else if (this.ligado && this.velocidade < 10) {
            console.log('Não é possivel desacelerar um carro parado');
        } else {
            console.log('Não é possivel desacelerar um carro desligado.')
        }
    }
}

carro.desligar();
carro.ligar();
carro.ligar();
carro.acelerar();
carro.acelerar();
carro.desacelerar();
carro.desligar();
carro.acelerar();
carro.desacelerar();





const ladoA = 0;
const ladoB = 0;

if (ladoA > 6 || ladoA < 0 || ladoB > 6 || ladoB < 0) {
    console.log(`Essa peça não existe no dominó.`)
} else if (ladoA == ladoB) {
    if(ladoA && ladoB == 6) {
        console.log(`Bucha de sena`);
    } else if(ladoA && ladoB == 1) {
        console.log(`Bucha de ás`);
    } else if(ladoA && ladoB == 2) {
        console.log(`Bucha de duque`);
    } else if(ladoA && ladoB == 3) {
        console.log(`Bucha de terno`);
    } else if(ladoA && ladoB == 4) {
        console.log(`Bucha de quadra`);
    } else if(ladoA && ladoB == 5) {
        console.log(`Bucha de quina`);
    } else if (ladoA == 0 && ladoB == 0) {
        console.log(`Bucha de branco`);
    } 
} else {
    console.log(`Não é uma bucha.`)
}
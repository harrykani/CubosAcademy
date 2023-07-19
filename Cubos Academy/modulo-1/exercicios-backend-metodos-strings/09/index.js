const nome = 'Bruno Xavier';

function generateNickname (name) {
    let nickname = '@'
    for (let letter of name) {
    nickname += letter;
    }
    nickname = nickname.replace(" ",'');
    console.log(nickname.slice(0, 13).toLowerCase());
}

generateNickname(nome);
let identificador = "123";
let nome = "José silva costa";
let email = "      jose@email.com  ";

function dataFormatation (id, name, email) {
    identifierDataFormatation(id);
    nameDataFormatation(name);
    emailDataFormatation(email);
}

function identifierDataFormatation (id) {
    if (id.length < 6) {
        id = id.padStart(6, '0');
        console.log(id);
    } else if (id.length > 6) {
        console.log('Número de identificador inválido');
    }
}

function nameDataFormatation(name) {
    let nameWithUpperCase = '';
    for (const palavra of name.split(' ')) {
        nameWithUpperCase += `${palavra.slice(0, 1).toUpperCase()}${palavra.slice(1).toLowerCase()} `;
    }
    name = nameWithUpperCase.trim();
    console.log(nameWithUpperCase);
}

function emailDataFormatation(email) {
    email = email.trim();
    console.log(email);
}

dataFormatation(identificador, nome, email);
const cpf = "12345678900";
const cnpj = "12345678000199";

function formatCPF (numbers) {    
    const formatedCPF = `${numbers.slice(0, 3)}.${numbers.slice(3,6)}.${numbers.slice(6,9)}-${numbers.slice(9)}`;
    console.log(formatedCPF);
};

function formatCNPJ (numbers) {    
    const formatedCNPJ = `${numbers.slice(0, 2)}.${numbers.slice(2,5)}.${numbers.slice(5,8)}/${numbers.slice(8, 12)}-${numbers.slice(12)}`;
    console.log(formatedCNPJ);
};

function validateCPF (numbers) {
    if (numbers.length !== 11) {
        console.log('CPF inválido');
    } else {
        formatCPF(numbers);
    }
}

function validateCNPJ (numbers) {
    if (numbers.length !== 14) {
        console.log('CNPJ inválido');
    } else {
        formatCNPJ(numbers);
    }
}

validateCPF(cpf);
validateCNPJ(cnpj);
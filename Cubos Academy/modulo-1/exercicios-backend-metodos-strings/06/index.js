const celular = 7199918888;

function formatePhoneNumber (phoneNumber) {
    phoneNumber += "";
    if(phoneNumber.length == 10) {
        console.log(`(${phoneNumber.slice(0, 2)}) 9 ${phoneNumber.slice(2, 6)}-${phoneNumber.slice(6)}`);
    } else if (phoneNumber.length == 8) {
        console.log(`9 ${phoneNumber.slice(0, 4)}-${phoneNumber.slice(4)}`);
    } 
}

formatePhoneNumber(celular);
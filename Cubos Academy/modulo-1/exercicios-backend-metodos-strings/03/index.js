const texto = "Aprenda programar do zero na Cubos Academy";

function friendlyURLConverter (text) {
    let friendlyURL = text.toLowerCase();
    while (friendlyURL !== friendlyURL.replace(" ", "-")) {
        friendlyURL = friendlyURL.replace(" ", "-");
    }
    console.log(friendlyURL);
}

friendlyURLConverter(texto);
const express = require('express');
const { getPackageDescriptionNpm } = require('utils-playground');

const app = express();

app.get('/pacote/:nomePacote', async (req, res) => {
    const { nomePacote } = req.params;

    const descricao = await getPackageDescriptionNpm(nomePacote);

    return res.send(descricao);
});



app.listen(3000);
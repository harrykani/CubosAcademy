const numerosNecessarios = (req, res, next) => {
    const {num1, num2} = req.query;
    if (!num1 || !num2) {
        res.send('Revise os parametros necessários para a requisição.')
    }
    if (num1 && num2) {
        next();
    }
};

module.exports = numerosNecessarios;
const somar = (req, res) => {
    const {num1, num2} = req.query;
    const result = Number(num1) + Number(num2)
    res.send(String(result));
};

const subtrair = (req, res) => {
    const {num1, num2} = req.query;
    const result = Number(num1) - Number(num2)
    res.send(String(result));
};

const multiplicar = (req, res) => {
    const {num1, num2} = req.query;
    const result = Number(num1) * Number(num2)
    res.send(String(result));
};

const dividir = (req, res) => {
    const {num1, num2} = req.query;
    const result = Number(num1) / Number(num2)
    res.send(String(result));
};

module.exports = {
    somar,
    subtrair,
    multiplicar,
    dividir    
};
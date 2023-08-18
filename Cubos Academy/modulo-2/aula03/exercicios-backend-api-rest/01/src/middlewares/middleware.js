const autentication = (req, res, next) => {
    const { senha } = req.query;

    if (senha !== 'cubos123') {
        return res.status(401).json( { "mensagem": "A senha não foi informada ou está incorreta." } );
    }

    return next();
}

module.exports = autentication;
const { listarPokemons, detalharPokemon } = require('utils-playground');

const listagemPokemons = async (req, res) => {
    let { pagina } = req.query;

    const result = await listarPokemons(pagina ?? 1);
    return res.status(200).send(result['results']);
}

const obterPokemon = async (req, res) => {
    const { idOuNome } = req.params;

    let parametroDaFuncao = idOuNome;

    if (idOuNome === Number(parametroDaFuncao)) {
        parametroDaFuncao = Number(idOuNome);
    }

    const dadosPokemon = await detalharPokemon(parametroDaFuncao);

    const { id, name, height, weight, base_experience, forms, abilities, species } = dadosPokemon;

    const pokemon = {
        id,
        name,
        height,
        weight,
        base_experience,
        forms,
        abilities,
        species
    };
       
    res.status(200).send(pokemon);
}

module.exports = { listagemPokemons, obterPokemon };

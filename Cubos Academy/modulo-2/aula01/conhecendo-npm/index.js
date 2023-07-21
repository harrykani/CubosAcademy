const {uniq} = require('lodash'); // require - module.exports
const {arrayNumeros, arrayLetras} = require('./arrays');
const arNumUnico = uniq(arrayNumeros);
const arLetUnico = uniq(arrayLetras);

console.log(arNumUnico);
console.log(arLetUnico);
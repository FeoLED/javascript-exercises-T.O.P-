const reverseString = function(oracion) {
    let separado = oracion.split("");
    let invertido = separado.reverse();
    let oracionInversa = invertido.join("");
    return oracionInversa
};

// Do not edit below this line
module.exports = reverseString;

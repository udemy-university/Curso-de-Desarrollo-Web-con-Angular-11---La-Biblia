// function sumar(a, b) {
//     return a + b;
// }
const sumar = function (a, b) {
    return a + b;
};
const sumar2 = function (a, b) {
    return a + b;
};
const sumar3 = function (a, b) {
    return a + b;
};
// Parámetros opcionales y valores por defecto
function nombreCompleto(nombre, apellido = 'Dezerio') {
    if (apellido)
        return nombre + " " + apellido;
    else
        return nombre;
}
console.log(nombreCompleto('Sandro', 'Dezerio'));
console.log(nombreCompleto('Sandro'));
// Parámetros REST
function nombreCompleto2(nombre, ...rest) {
    return nombre + " " + rest.join(' ');
}
console.log(nombreCompleto2('Ana', 'María', 'Dolores', 'García', 'Sancho'));

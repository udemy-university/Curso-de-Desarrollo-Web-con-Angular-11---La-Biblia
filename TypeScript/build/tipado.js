// Boolean
let esValido = true;
// Number
let edad = 12;
// String
let nombre = 'Sandro';
let apellido = 'Dezerio';
let nombre_completo = `${nombre} ${apellido}`;
// Array
let numeros = [12, 3, 5];
let numeros2 = [5, 1];
// Tupla
let sitio = ['Casa', 15];
// Enum (se pueden ir incrementando solas o les podes dar un valor)
var Estado;
(function (Estado) {
    Estado[Estado["Offline"] = 0] = "Offline";
    Estado[Estado["Indefinido"] = 1] = "Indefinido";
    Estado[Estado["Online"] = 2] = "Online";
})(Estado || (Estado = {}));
var Estado2;
(function (Estado2) {
    Estado2[Estado2["Offline"] = -1] = "Offline";
    Estado2[Estado2["Indefinido"] = 0] = "Indefinido";
    Estado2[Estado2["Online"] = 1] = "Online";
})(Estado2 || (Estado2 = {}));
let stat = Estado.Online;
console.log(stat);
let stat2 = Estado2.Online;
console.log(stat2);
// Unknown (no se puede asignar el contenido de esta variable a cualquier otro)
let sinTipo = 'Hola';
sinTipo = 32;
sinTipo = true;
// nombre = sinTipo; // ERROR!
// Any (se puede asignar el contenido de esta variable a cualquier otro)
let tipoIndefinido = 'es un mensaje';
// nombre = tipoIndefinido; // NO HAY ERROR!
// Void (no devuelve nada)
function logger() {
    console.log("Logger");
}

// function sumar(a, b) {
//     return a + b;
// }

const sumar: (a: number, b: number) => number = function (a: number, b: number): number {
    return a + b;
}

const sumar2 = function (a: number, b: number): number {
    return a + b;
}

const sumar3: (a: number, b: number) => number = function(a, b) {
    return a + b;
}

// Parámetros opcionales y valores por defecto
function nombreCompleto(nombre: string, apellido: string = 'Dezerio'): string {
    if(apellido) return nombre + " " + apellido;
    else return nombre;
}

console.log(nombreCompleto('Sandro', 'Dezerio'));
console.log(nombreCompleto('Sandro'));

// Parámetros REST
function nombreCompleto2(nombre: string, ...rest: string[]): string {
    return nombre + " " + rest.join(' ');
}

console.log(nombreCompleto2('Ana', 'María', 'Dolores', 'García', 'Sancho'));
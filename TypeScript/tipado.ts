// Boolean
let esValido: boolean = true;

// Number
let edad: number = 12;

// String
let nombre: string = 'Sandro';
let apellido: string = 'Dezerio';

let nombre_completo: string = `${nombre} ${apellido}`;

// Array
let numeros: number[] = [12, 3, 5];
let numeros2: Array<number> = [5, 1];

// Tupla
let sitio: [string, number] = ['Casa', 15];

// Enum (se pueden ir incrementando solas o les podes dar un valor)
enum Estado {
    Offline,
    Indefinido,
    Online
}

enum Estado2 {
    Offline = -1,
    Indefinido = 0,
    Online = 1
}

let stat: Estado = Estado.Online;
console.log(stat);
let stat2: Estado2 = Estado2.Online;
console.log(stat2);

// Unknown (no se puede asignar el contenido de esta variable a cualquier otro)
let sinTipo: unknown = 'Hola';
sinTipo = 32;
sinTipo = true;
// nombre = sinTipo; // ERROR!

// Any (se puede asignar el contenido de esta variable a cualquier otro)
let tipoIndefinido: any = 'es un mensaje';
// nombre = tipoIndefinido; // NO HAY ERROR!

// Void (no devuelve nada)
function logger(): void {
    console.log("Logger");
}
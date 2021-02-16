function mostrarPersona(pPersona) {
    console.log(pPersona);
}
mostrarPersona({
    nombre: 'Rosa',
    apellido: 'García',
    edad: 15
});
function mostrarCoche(pCoche) {
    console.log(pCoche);
}
mostrarCoche({
    marca: 'Mercedes',
    modelo: 'C180'
});
mostrarCoche({
    marca: 'Mercedes',
    modelo: 'Ty121',
    color: 'rojo'
});
let p1 = { x: 121, y: 1 };
const miBusqueda = (v, b) => {
    const result = v.search(b);
    return result > -1;
};
class Adulto {
    constructor(pNombre, pEdad, pCoche) {
        this.nombre = pNombre;
        this.edad = pEdad;
        this.coche = pCoche;
    }
}
class Nino {
}

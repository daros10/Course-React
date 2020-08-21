const persona = {
  nombre: 'Tony',
  apellido: 'Stark',
  edad: 45,
  direccion: {
    ciudad: 'New York',
    zip: 123466,
    lat: 14.325,
    lng: 32.458,
  },
};

// console.table(persona);

// aqui se esta haciendo una copia de referencia
// en pocas palabras si se modifica el objecto
// persona2, el objeto persona tambien sufrira
// cambios, por lo cual en teoria se realiza una
// copia referenciada que apunta al mismo espacio
// de memoria. ESTE TIPO DE ASIGNACIONES NO HAY QUE
// HACERLAS DE ESTA MANERA, ya que se muta la data.
// const persona2 = persona; // UNA COPIA DE OBJETO NO SE DEBE HACER ASI

// Como solucion ES6, incorpora el SPREAD OPERATOR,
// el mismo permite realizar una copia de todos los
// elementos de un objeto.
const persona2 = { ...persona }; // SPREAD OPERATOR

persona.nombre = 'Peter';

console.log(persona);
console.log(persona2);

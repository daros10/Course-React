// Variables y constanes
// Ya no se debe usar VAR nuca

const nombre = 'Dario';
const apellido = 'Herrera';

let valorDado = 5;
console.log(nombre, apellido, valorDado);

// let vive dentro de un scope, por eso hay como crear
// nuevas variables con el mismo nombre.
// let prevenieve la sobrescitura o mutacion de valores
// por ello es que no se debe usar VAR.
if (true) {
  const nombre = 'Wladimir';
  let valorDado = 4;
  console.log(nombre, valorDado);
}
console.log(nombre, valorDado);

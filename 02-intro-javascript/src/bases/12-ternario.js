// operador condicional ternario

const activo = true;
const mensaje = activo ? 'Activo' : 'Inactivo';

// Solo procesa y asigna un valor de cumplirse la condicional
// es como que tuvieramos solo una parte del if sin el else
// if () {}
const mensaje2 = !activo && 'Activo';

console.log(mensaje);
console.log(mensaje2);

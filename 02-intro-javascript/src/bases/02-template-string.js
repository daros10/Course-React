const nombre = 'Dario';
const appelido = 'Herrera';
// const nombreCompleto = nombre + ' ' + appelido;
// template strig
const nombreCompleto = `${nombre} ${appelido}`;
console.log(nombreCompleto);

function getSaludo(nombre) {
  return `Hola: ${nombre}`;
}

console.log(`Esto es un texto -- ${getSaludo(nombreCompleto)}`);

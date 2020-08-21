// Funciones
function saludar(nombre) {
  return `Hola mi prro ${nombre}`;
}

// guardandola en una referencia
const hello = function (nombre) {
  return `Hola mi prro ${nombre}`;
};

// funciones de flecha
const saludarFlecha = (nombre) => {
  return `Hola mi prro ${nombre}`;
};

// si la funcion solo devuelve un valor
// se la puede reducir asi
const saludarFlechaSimplificada = (nombre) => `Hola mi prro ${nombre}`;

console.log(saludar('Jose'));
console.log(`Desde variable: ${hello('vegeta')}`);
console.log(`Desde funcion de flecha: ${saludarFlecha('goku')}`);
console.log(`Desde funcion de flecha simplificada: ${saludarFlecha('krilin')}`);

// tanto getUser como getUserImplicita son lo mismo, pero
// con menor o mayor cantidad de lineas de codigo
const getUser = () => {
  return {
    uid: 'ABC123',
    username: 'daro',
  };
};

// retornando el objeto de manera implicita
const getUserImplicita = () => ({
  uid: 'ABC123',
  username: 'daro',
});

const getUsuarioActivo = (nombre) => ({
  uid: 'abcd123',
  username: nombre,
});

console.log(getUser());
console.log(getUserImplicita());

const usuarioActivo = getUsuarioActivo('DARIO');
console.log(usuarioActivo);

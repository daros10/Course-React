// desestructuraciond de arreglos

const personajes = ['Goku', 'Vegeta', 'Trunks'];
const [p1, , p3] = personajes;
console.log('Personaje1', p1);
console.log('Personaje3', p3);

const retornaArreglo = () => {
  return ['ABC123', 123];
};

const [cadena, numeros] = retornaArreglo();

console.log(cadena, numeros);

const useState = (valor) => {
  return [valor, () => console.log('Hola mundo')];
};

const [valorRecibido, miFuncionCustomizada] = useState('valor random :v');
console.log(valorRecibido);
// accediendo a la propueda llamada funcion.
// Al ser una funcion se debe de anadir a la propieda --> ()
miFuncionCustomizada();

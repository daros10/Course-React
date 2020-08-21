// 1, forma de hacer un import cuando se usa directamte el export const heroe
// import { heroes } from './data/heroes';

// 2, forma de hacer un import cuando se usa export default heroes;
// 2.1 Mezclando imports con exports de tipo 1 y 2
import heroes, { owners } from '../data/heroes';

const getHeroeById = (id) => {
  // return heroes.filter((heroe) => heroe.id === id);
  return heroes.find((heroe) => heroe.id === id);
};

console.log(getHeroeById(2));

// FIND -- solo deveulve un elemento -- barre el arreglo u objecto hasta encontrar una coincidencia -- RETORNA UN VALOR EN FORMA DE OBJECT
// FILTER -- devuele todas las coincidencias -- barre todo el arreglo U objeto -- REATORNA TODAS LAS COINCIDENCIAS EN FORMA DE ARRAY
const heroeByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);

console.log(heroeByOwner('DC'));
console.log(owners);

export const getHeroeByIdExportado = (id) => {
  // return heroes.filter((heroe) => heroe.id === id);
  return heroes.find((heroe) => heroe.id === id);
};

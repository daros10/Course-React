import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import { heroes } from '../../data/heroes';

describe('Preubas al archivo 08-imp-exp', () => {
  test('Deberia retornar un heroe por id ', () => {
    const id = 1;
    const heroe = getHeroeById(id);

    const heroeData = heroes.find((h) => h.id === id);

    expect(heroe).toEqual(heroeData);
  });

  test('debe retornar undefined si id heroe no existe', () => {
    const heroe = getHeroeById();

    expect(heroe).toBe(undefined);
  });

  test('Debe retornar todos los hereos por owner', () => {
    const owner = 'DC';
    const heroesPorOwner = getHeroesByOwner(owner);
    const heroeDataByOwner = heroes.filter((h) => h.owner === owner);

    expect(heroesPorOwner).toEqual(heroeDataByOwner);
  });

  test('Verifica que el tamano del array sea 2 envinado Marvel ', () => {
    const owner = 'Marvel';
    const heroesPorOwner = getHeroesByOwner(owner);

    expect(heroesPorOwner.length).toBe(2);
  });
});

import { getGifs } from '../../helpers/getGifs';

describe('Pruebas en la funcion fetch gifs', () => {
  test('La funcion async debe retornar 13 resultados', async () => {
    const resultados = await getGifs('Rick and morty');
    expect(resultados.length).toBe(13);
  });

  test('La funcion async debe retornar 0 resultados si no se envia el argumento', async () => {
    const resultados = await getGifs();
    expect(resultados.length).toBe(0);
  });
});

import { getImagen } from '../../base/11-async-await';

describe('Prueba al achivo 11 async-await y fetch', () => {
  test('getImagen deberia retornar una url de la img', async () => {
    const url = await getImagen();
    expect(url.includes('https://')).toBe(true);
  });
});

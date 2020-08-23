import { retornaArreglo } from '../../base/07-deses-arr';

describe('Pruebas en el archivo 07-deses-arr', () => {
  test('Debe de retornar un array de string y numero ', () => {
    const [letras, numeros] = retornaArreglo();

    expect(letras).toBe('ABC');
    expect(numeros).toBe(123);

    // verrificando que sean de tipo string y number
    expect(typeof letras).toBe('string');
    expect(typeof numeros).toBe('number');
  });
});

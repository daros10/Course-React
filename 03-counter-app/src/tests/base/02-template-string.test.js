import '@testing-library/jest-dom';
import { getSaludo } from '../../base/02-template-string';

describe('Pruebas en 02-temlate-string.js', () => {
  test('getSaludo debe de retornar Hola Dario ', () => {
    const nombre = 'Dario';

    const saludo = getSaludo(nombre);

    expect(saludo).toBe(`Hola ${nombre}`);
  });

  test('getSaludo debe retornar Hola Carlos si no hay argumento nombre ', () => {
    const nombrePorDefecto = 'Carlos';
    const saludo = getSaludo();

    expect(saludo).toBe(`Hola ${nombrePorDefecto}`);
  });
});

import '@testing-library/jest-dom';
import { getUser, getUsuarioActivo } from '../../base/05-funciones';

describe('Pruebas en 05-funciones.js', () => {
  test('Verifica que los dos objetos sean iguales', () => {
    const userTest = {
      uid: 'ABC123',
      username: 'El_Papi1502',
    };

    const user = getUser();

    expect(user).toEqual(userTest);
  });

  test('Verifica la igualdad de los objetos de los usuarios activos ', () => {
    const nameUserActive = 'Dario';

    const usuarioActivoTest = {
      uid: 'ABC567',
      username: nameUserActive,
    };

    const usuarioActivo = getUsuarioActivo(nameUserActive);

    expect(usuarioActivo).toEqual(usuarioActivoTest);
  });
});

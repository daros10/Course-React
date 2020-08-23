describe('Pruebas en el archivo demo.test.js', () => {
  test(' deben de ser iguales los string ', () => {
    // Se debe cumplir AAA -- ARRANGE - ACT - ASSERT
    // 1. inicializacion -- arragne
    const mensaje = 'Hola mundo';

    //2. estimulo -- act
    const mensaje2 = `Hola mundo`;

    //3. observar el comportamiento -- assert
    expect(mensaje).toBe(mensaje2);
  });
});

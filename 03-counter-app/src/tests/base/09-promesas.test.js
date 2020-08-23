const { getHeroeByIdAsync } = require('../../base/09-promesas');
const { heroes } = require('../../data/heroes');

describe('Prueba del archivo 09-promesas', () => {
  test('Debe retornal un heroe async ', (done) => {
    const id = 1;
    getHeroeByIdAsync(id).then((heroe) => {
      expect(heroe).toBe(heroes[0]);
      done();
    });
  });

  test('Debe de obtener un error si el heroe no existe', (done) => {
    const mensajeError = 'No se pudo encontrar el héroe';
    const id = 10;
    getHeroeByIdAsync(id).catch((err) => {
      expect(err).toBe(mensajeError);
      done();
    });
  });
});

// Para las tareas asyncronas es necesario enviar en la test como
// paramatro el argumento done, el cual posterioremnte debe de ser
// llamado en la resolucion de la tareas asincrona done();

import { getHeroeByIdExportado } from './bases/08-import-export';
// Promesas
const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    // console.log('2 segundos despues');
    const heroe = getHeroeByIdExportado(2);
    // mandado informacion al then

    heroe ? resolve(heroe) : reject('No se encontro ningun heroe con ese Id');
  }, 2000);
});

promesa
  .then((datos) => {
    console.log('Recibiendo datos de la promesa', datos);
  })
  .catch((err) => {
    console.log(err);
  });

const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // console.log('2 segundos despues');
      const heroe = getHeroeByIdExportado(id);
      // mandado informacion al then

      heroe ? resolve(heroe) : reject('No se encontro ningun heroe con ese Id');
    }, 2000);
  });
};

getHeroeByIdAsync(5645456)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  });

// object desctructuring
const persona = {
  nombre: 'Tony',
  edad: 45,
  clave: 'Ironman',
};

// destructurando el objeto
const { nombre, edad, clave } = persona;
console.log(nombre, edad, clave);

// accediendo con nombres personalizados
const { nombre: name, edad: age, clave: key } = persona;
console.log(name, age, key);

const useContext = ({ nombre, clave, edad, rango = 'capitan' }) => {
  // console.log(nombre, edad, rango);
  return {
    nombreClave: clave,
    anios: edad,
    latlng: {
      lat: 12.545,
      lng: 15.656,
    },
  };
};

const avenger = useContext(persona);
//accediendo a un objeto dentro de otro objeto mediante destructuring
// const {
//   nombreClave,
//   anios,
//   latlng: { lat, lng },
// } = avenger;

// froma mas optima
const { nombreClave, anios, latlng } = avenger;
const { lat, lng } = latlng;
console.log(nombreClave, anios);
console.log(lat, lng);

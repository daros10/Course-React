// async - await

// El codigo que se crea con promesas es LARGo
// para ello es mejor trabajar con async - await

// const getImagenPromesa = () => new Promise((resolve, reject) => resolve('http://abcdfdfd.com'));
// getImagenPromesa().then(console.log);

// una buena practica es trabajar con Try-catch
const getImagen = async () => {
  try {
    const apiKey = 'vY3EHpQoJipy2wQIKrfXqo2zaUVCFMfO';
    const respuesta = await fetch(
      `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await respuesta.json();
    const { url } = data.images.original;
    const img = document.createElement('img');
    img.src = url;

    document.body.append(img);
  } catch (error) {
    console.error(error);
  }
};

getImagen();

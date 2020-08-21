const apiKey = 'vY3EHpQoJipy2wQIKrfXqo2zaUVCFMfO';
const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

// peticion
//   .then((respuesta) => {
//     // esta api responde con un ReadableStream
//     // por esta razon hay que manejarla nuevamente con una
// 		// promesa y json
// 		// este codigo no es oprtimo, para ello podemos encadenar promesas
//     respuesta.json().then((data) => {
//       console.log(data);
//     });
//   })
//   .catch((err) => console.log(err));

peticion
  .then((respuesta) => respuesta.json())
  .then(({ data }) => {
    const { url } = data.images.original;

    const img = document.createElement('img');
    img.src = url;

    document.body.append(img);
  })
  .catch((err) => console.log(err));

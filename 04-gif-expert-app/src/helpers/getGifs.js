export const getGifs = async (category) => {
  const apiKey = 'vY3EHpQoJipy2wQIKrfXqo2zaUVCFMfO';
  const limit = 13;
  const baseUrl = `https://api.giphy.com/v1/gifs`;
  const url = `${baseUrl}/search?q=${encodeURI(
    category
  )}y&limit=${limit}&api_key=${apiKey}`;

  const respuesta = await fetch(url);
  const { data } = await respuesta.json();

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });

  return gifs;
};
